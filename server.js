// Libereries and modules
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// models
var Character = require('./character');
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
    var enemy = new Character();
    var player = new Character();

    //when recieving a simple message event
    socket.on('message', function(msg){
        console.log("[msg]: "+JSON.stringify(msg));
        socket.emit('message', msg);//ECHO
    })

    //battle-related packets
    socket.on('battle', (msg) => {
        console.log("[msg 'battle']: "+JSON.stringify(msg)); //log

        if(msg.type == "action" && msg.event == "attack")
        {
            //inflict dmg from player to enemy
            var isAlive = enemy.receiveDamage(player, msg.data.attackIndex);

            socket.emit('battle', new Message("enemy-update", "health", enemy.health)); //send current enemy health
            if(!isAlive)
                socket.emit('battle', new Message("enemy-update", "dead", enemy.health))

            //inflict dmg from enemy to player
            var isAlive = player.receiveDamage(enemy, 0);
            if(!isAlive)
                socket.emit('battle', new Message("player-update", "dead", player.health))
            socket.emit('battle', new Message("player-update", "health", player.health)); //send current player health

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