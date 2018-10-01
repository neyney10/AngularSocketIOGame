// Libereries and modules
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// models
var Character = require('./character');
var Player = require('./player');
var Floor = require('./floor');
var Attack = require('./attack');
var Defence = require('./attack');
var Message = require('./message');

//pre-defined values
var attacks = [
    new Attack('Punch',10,2),
    new Attack('Sword Slash',20,6),
    new Attack('Magic orb',25,9)
];

var defences = [
    new Defence('Evade',100, 35, 8),
    new Defence('Hand Guard',45, 85, 6),
    new Defence('Shield', 80, 65, 5)
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
    var player = new Player();

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
                    socket.emit('battle', new Message("enemy-update", "status", {health: {amount: enemy.health, max: enemy.healthPoolCap}, mana: enemy.mana})); //send current enemy health and mana    
                }
                else { //finished 
                    console.log('floor up');
                    floor = floors[++floorIndex];
                    floorPos = 0;
                    enemy = floor.getEnemy(floorPos);
                    socket.emit('battle', new Message("enemy-update", "status", {health: {amount: enemy.health, max: enemy.healthPoolCap}, mana: enemy.mana})); //send current enemy health and mana    
                }


                // enemy = new Character(); 
                // enemy.mana = 1000;
                // enemy.healthPoolCap = Math.floor(30+Math.random()*25);
                // enemy.health = enemy.healthPoolCap;
                // enemy.defence = {soft: Math.floor(Math.random()*6), hard: Math.floor(Math.random()*25)}
                // socket.emit('battle', new Message("enemy-update", "status", {health: {amount: enemy.health, max: enemy.healthPoolCap}, mana: enemy.mana})); //send current enemy health and mana    
            }
        }
        else
        if(msg.type == "start" && msg.event == "start")  //Start a Battle
        {
            enemy = floor.getEnemy(0);
            socket.emit('battle', new Message("enemy-update", "status", {health: {amount: enemy.health, max: enemy.healthPoolCap}, mana: enemy.mana})); //send current enemy health and mana    
                
            // enemy = new Character(); 
            // enemy.mana = 1000;
            // enemy.healthPoolCap = Math.floor(30+Math.random()*25);
            // enemy.health = enemy.healthPoolCap;
            // enemy.defence = {soft: Math.floor(Math.random()*6), hard: Math.floor(Math.random()*25)}
            // socket.emit('battle', new Message("enemy-update", "status", {health: {amount: enemy.health, max: enemy.healthPoolCap}, mana: enemy.mana})); //send current enemy health and mana
        }
        else
        if(msg.type == "action" && msg.event == "move") // in-battle actions of attacking and defending
        {
            if((msg.data.attackIndex < 0 && msg.data.defenceIndex < 0) || (msg.data.attackIndex >= 0 && msg.data.defenceIndex >= 0))
                return; // DO NOTHING

            //inflict dmg from player to enemy
            var isAlive = enemy.receiveDamage(player, msg.data.attackIndex, -1);

            socket.emit('battle', new Message("enemy-update", "status", {health: {amount: enemy.health, max: enemy.healthPoolCap}, mana: enemy.mana, action: 0, isAttack: true})); //send current enemy health and mana
            if(!isAlive)
                socket.emit('battle', new Message("enemy-update", "dead", ''));

            //inflict dmg from enemy to player
            var isAlive = player.receiveDamage(enemy, 0, msg.data.defenceIndex);
            socket.emit('battle', new Message(
                "player-update",
                "status",
                {health: {amount: player.health, max: player.healthPoolCap},
                mana: player.mana,
                action:(msg.data.defenceIndex == undefined) ? msg.data.attackIndex : msg.data.defenceIndex,
                isAttack: msg.data.defenceIndex == undefined})); //send current enemy health and mana
            if(!isAlive)
                socket.emit('battle', new Message("player-update", "dead", player.health))

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