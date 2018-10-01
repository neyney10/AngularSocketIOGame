// Libereries and modules
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// models
var Character = require('./character');
var Player = require('./player');
var Message = require('./message');

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
    var enemy; 
    var player = new Player();

    //when recieving a simple message event
    socket.on('message', function(msg){
        console.log("[msg]: "+JSON.stringify(msg));
        socket.emit('message', msg);//ECHO
    })

    //battle-related packets
    socket.on('battle', (msg) => {
        console.log("[msg 'battle']: "+JSON.stringify(msg)); //log

        if(msg.type == "advance" && msg.event == "next") //Advance next floor
        {
            if(player.health > 0) //if alive
            { //new enemy
                enemy = new Character(); 
                enemy.mana = 1000;
                enemy.health = Math.floor(30+Math.random()*25);
                enemy.defence = {soft: Math.floor(Math.random()*6), hard: Math.floor(Math.random()*25)}
                socket.emit('battle', new Message("enemy-update", "status", {health: enemy.health, mana: enemy.mana})); //send current enemy health and mana    
            }
        }
        else
        if(msg.type == "start" && msg.event == "start")  //Start a Battle
        {
            enemy = new Character(); 
            enemy.mana = 1000;
            enemy.health = Math.floor(30+Math.random()*25);
            enemy.defence = {soft: Math.floor(Math.random()*6), hard: Math.floor(Math.random()*25)}
            socket.emit('battle', new Message("enemy-update", "status", {health: enemy.health, mana: enemy.mana})); //send current enemy health and mana
        }
        else
        if(msg.type == "action" && msg.event == "move") // in-battle actions of attacking and defending
        {
            if((msg.data.attackIndex < 0 && msg.data.defenceIndex < 0) || (msg.data.attackIndex >= 0 && msg.data.defenceIndex >= 0))
                return; // DO NOTHING

            //inflict dmg from player to enemy
            var isAlive = enemy.receiveDamage(player, msg.data.attackIndex, -1);

            socket.emit('battle', new Message("enemy-update", "status", {health: enemy.health, mana: enemy.mana})); //send current enemy health and mana
            if(!isAlive)
                socket.emit('battle', new Message("enemy-update", "dead", ''));

            //inflict dmg from enemy to player
            var isAlive = player.receiveDamage(enemy, 0, msg.data.defenceIndex);
            socket.emit('battle', new Message("player-update", "status", {health: player.health, mana: player.mana})); //send current enemy health and mana
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