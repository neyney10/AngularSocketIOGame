
// models
var Character = require('./character');
var Player = require('./player');
var Floor = require('./floor');
var Attack = require('./attack');
var Defence = require('./defence');
var Item = require('./item');
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

var items = [
    new Item('T-Shirt', 'bodyArmor', {soft: 1, hard: 0}, 0, ''),
    new Item('Hat', 'headGear', {soft: 1, hard: 0}, 1, ''),
    new Item('Wood Stick', 'weapon', {min: 0, max: 2}, 2, '')
];

var floors = [
    new Floor('FLOOR 1', 0, [
                    Character.create(30, 10, 20, 30, 1, 5, 0, 0, [attacks[0]], [defences[1]]),
                    Character.create(40, 10, 25, 35, 0, 2, 1, 5, [attacks[0]], [defences[2]]),
                    Character.create(30, 15, 25, 25, 2, 7, 1, 0, [attacks[0]], [defences[1]]),
                    Character.create(35, 13, 20, 55, 1, 5, 2, 0, [attacks[0]], [defences[0]])]),

    new Floor('FLOOR 2', 1, [
                    Character.create(40, 15, 40, 33, 1, 5, 0, 0, [attacks[0]], [defences[0]]),
                    Character.create(45, 12, 45, 33, 1, 3, 3, 10, [attacks[0]], [defences[1]]),
                    Character.create(35, 15, 35, 44, 2, 7, 1, 0, [attacks[1]], [defences[2]]),
                    Character.create(40, 13, 35, 80, 2, 6, 2, 5, [attacks[0]], [defences[0]])]),
    new Floor('FLOOR 3', 2, [
                    Character.create(50, 12, 75, 55, 4, 5, 3, 0, [attacks[0]], [defences[0]]),
                    Character.create(65, 10, 80, 66, 2, 7, 5, 15, [attacks[0]], [defences[1]]),
                    Character.create(60, 15, 90, 77, 0, 10, 3, 5, [attacks[1]], [defences[2]])])
                    
];


module.exports = function(http) {
    var io = require('socket.io')(http); //init Socket.IO
    
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.emit('message', new Message('new-message','connected','[Server] Hello!'));
        var floor = floors[0];
        var highestFloorReached = 0;
        var floorPos = 0; //where inside the floor am i -> enemies
        var enemy; 
        var player = new Player("merlin");
    
        //when recieving a simple message event
        socket.on('message', function(msg){
            console.log("[msg]: "+JSON.stringify(msg));
    
            socket.emit('message', msg);//ECHO
        })
        
        socket.on('game', (msg) => {
            console.log("[msg 'game']: "+JSON.stringify(msg)); //log
            switch(msg.type) {
                case "floors":
                switch(msg.event) {
                    case "get":
                        socket.emit('game', new Message("floors", "get", floors)); 
                    break;
                }
                break;
                case "attacks":
                switch(msg.event) {
                    case "get":
                        socket.emit('game', new Message("attacks", "get", attacks)); 
                    break;
                }
                break;
                case "defences":
                switch(msg.event) {
                    case "get":
                        socket.emit('game', new Message("defences", "get", defences)); 
                    break;
                }
                break;
            }
        });

        //player-only related packets
        socket.on('player', (msg) => {
            console.log("[msg 'player']: "+JSON.stringify(msg)); //log
            switch(msg.type) {
                case "stats":
                    switch(msg.event) {
                        case "all": // send all - player object data
                            socket.emit('player', new Message("stats", "all", player));    
                        break;
                    }
                break;
                case "floors":
                    switch(msg.event) {
                        case "change":
                            // SHOULD EMIT ACK TO REST BATTLE TAB TO CURRENT 
                            floor = floors[msg.data];
                            floorPos = 0;
                            enemy = floor.getEnemy(0);

                            var enemyStatus = {health: {amount: enemy.health, max: enemy.healthPoolCap},
                            mana: {amount: enemy.mana, max: enemy.manaPoolCap}};
                
                            //NOTE: SHOULD COMBINE THOSE 2 EMITS TO SINGLE ONE
                            //send battle data
                            socket.emit('player', new Message(
                                "floors",
                                "change",
                                floor.id));

                            //send battle data
                            socket.emit('battle', new Message(
                                "update",
                                "new-enemy",
                                enemyStatus));
                        break;
                    }
                break;
                case "equipment":
                    switch(msg.event) {
                        case "change"://need to create "equip(item)" function on player
                            let item = player.removeItem(msg.data.id);

                            if(!item)
                                break;

                            player.equip(item);
                            socket.emit('player', 
                                new Message('equipment',
                                'change', 
                                {items: player.items, equipment: player.equipment}));
                        break;
                    }
                break;
                case "character":
                    switch(msg.event) {
                        case "chosen":
                            player = new Player(msg.data);
                            socket.emit('player', new Message(
                                "character",
                                "chosen",
                                msg.data));
                        break;
                    }
                break;
            } // end first switch - msg.type
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
                        highestFloorReached += (floor.id == highestFloorReached)? 1 : 0;
                        floor = floors[floor.id+1];
                        floorPos = 0;
                        enemy = floor.getEnemy(floorPos);

                        //send floor update
                        socket.emit('player', new Message(
                        "floors",
                        "update",
                        highestFloorReached));
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



}