// Libereries and modules
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// models
var Character = require('./character');
var Player = require('./player');
var Floor = require('./floor');
var Attack = require('./attack');
var Defence = require('./defence');
var Message = require('./message');

//pre-defined values
var attacks = [
    new Attack('Punch',10,2,0),
    new Attack('Sword Slash',20,6, 1),
    new Attack('Magic orb',25,9, 2)
];

var defences = [
    new Defence('Evade',100, 35, 8, 0),
    new Defence('Hand Guard',45, 85, 6, 1),
    new Defence('Shield', 80, 65, 5, 2)
];

var floors = [
    new Floor('1', [Character.create(30, 10, 20, 30, 1, 5, 0, 0, [attacks[0]], [defences[1]]),
                    Character.create(40, 10, 25, 35, 0, 2, 1, 5, [attacks[0]], [defences[2]]),
                    Character.create(30, 15, 25, 25, 2, 7, 1, 0, [attacks[0]], [defences[1]]),
                    Character.create(35, 13, 20, 55, 1, 5, 2, 0, [attacks[0]], [defences[0]])]),

    new Floor('2', [Character.create(40, 15, 40, 33, 1, 5, 0, 0, [attacks[0]], [defences[0]]),
                    Character.create(45, 12, 45, 33, 1, 3, 3, 10, [attacks[0]], [defences[1]]),
                    Character.create(35, 15, 35, 44, 2, 7, 1, 0, [attacks[1]], [defences[2]]),
                    Character.create(40, 13, 35, 80, 2, 6, 2, 5, [attacks[0]], [defences[0]])])
];

//app http routes
app.get('/', function(req, res){
    res.sendFile(__dirname +'/app/client/dist/client/index.html');
  });

app.get('*', function(req, res){
    res.sendFile(__dirname +'/app/client/dist/client/'+req.url);
  });

io.on('connection', function(socket){
    console.log('a user connected');
    socket.emit('message', new Message('new-message','connected','[Server] Hello!'));
    var floor = floors[0];
    var floorIndex = 0; //which floor am i at
    var floorPos = 0; //where inside the floor am i -> enemies
    var enemy; 
    var player = new Player("merlin");

    //when recieving a simple message event
    socket.on('message', function(msg){
        console.log("[msg]: "+JSON.stringify(msg));

        socket.emit('message', msg);//ECHO
    })

    //player-only related packets
    socket.on('player', (msg) => {
        console.log("[msg 'player']: "+JSON.stringify(msg)); //log

        if(msg.type == "stats" && msg.event == "all") // send all player object data
        {
            socket.emit('player', new Message("stats", "all", player)); //send current enemy health and mana    
        }
    });

    //battle-related packets
    socket.on('battle', (msg) => {
        console.log("[msg 'battle']: "+JSON.stringify(msg)); //log
        
        if(msg.type == "advance" && msg.event == "next") //Advance next enemy
        {
            if(player.health > 0) //if alive
            { //new enemy
                
                //if there is an enemy
                if(floorPos < floor.enemies.length-1)
                {
                    enemy = floor.getEnemy(++floorPos);
                }
                else { //finished 
                    console.log('floor up');
                    floor = floors[++floorIndex];
                    floorPos = 0;
                    enemy = floor.getEnemy(floorPos);
                }

                var enemyStatus = {health: {amount: enemy.health, max: enemy.healthPoolCap},
                mana: {amount: enemy.mana, max: enemy.manaPoolCap}};
    
                //send battle data
                socket.emit('battle', new Message(
                    "update",
                    "new-enemy",
                    enemyStatus));
            
             }
        }
        else
        if(msg.type == "start" && msg.event == "start")  //Start a Battle
        {
            enemy = floor.getEnemy(0);

            var enemyStatus = {health: {amount: enemy.health, max: enemy.healthPoolCap},
            mana: {amount: enemy.mana, max: enemy.manaPoolCap}};
    
            //send battle data
            socket.emit('battle', new Message(
                "update",
                "new-enemy",
                enemyStatus));
        }
        else
        if(msg.type == "action" && msg.event == "move") // in-battle actions of attacking and defending
        {
            if(msg.data.action == undefined ||msg.data.action < 0 || msg.data.isAttack == undefined)
                return; // DO NOTHING

            var isAttack = msg.data.isAttack;
            var attackIndex = (isAttack) ? msg.data.action : -1;
            var defenceIndex = (!isAttack) ? msg.data.action : -1;

            var EattackIndex = Math.floor(Math.random()*enemy.attacks.length); //choose an attack
            var EisAttack = (enemy.mana >= enemy.attacks[EattackIndex].manaCost); //see if there is enough mana, if not then choose defence
            var EdefenceIndex = (!EisAttack)? Math.floor(Math.random()*enemy.defences.length) : -1;
            EattackIndex = (EisAttack)? EattackIndex : -1;//FIX ATTACK INDEX - REST IT IF DEFENCE IS SET

            //inflict dmg from player to enemy
            var isAliveE = enemy.receiveDamage(player, attackIndex, EdefenceIndex);

            //inflict dmg from enemy to player
            var isAliveP = player.receiveDamage(enemy, EattackIndex, defenceIndex);

            var enemyStatus = {health: {amount: enemy.health, max: enemy.healthPoolCap},
            mana: {amount: enemy.mana, max: enemy.manaPoolCap},
            action: (EattackIndex >= 0)? enemy.attacks[EattackIndex].id : enemy.defences[EdefenceIndex].id,
            isAttack: EisAttack,
            isDead: !isAliveE};
            
            var playerStatus = {health: {amount: player.health, max: player.healthPoolCap},
            mana: {amount: player.mana, max: player.manaPoolCap},
            action: msg.data.action,
            isAttack: isAttack,
            isDead: !isAliveP};

            //send battle data
            socket.emit('battle', new Message(
                "update",
                "characters-status",
                {player: playerStatus, enemy: enemyStatus}));
        }
    });

    // When user Disconnects from the server/refreshed/ or reconnects
    socket.on('disconnect', function(){
        console.log('user disconnected');
    })

  });


http.listen(3000, function(){
    console.log('listening on *:3000');
  });