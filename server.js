// Libereries and modules
var app = require('express')();
var http = require('http').Server(app);
require('./gameserver')(http); //GAME SERVER WITH SOCKET.IO

//app http routes
app.get('/', function(req, res){
    res.sendFile(__dirname +'/app/client/dist/client/index.html');
  });

app.get('*', function(req, res){
    res.sendFile(__dirname +'/app/client/dist/client/'+req.url);
  });

//listen to port 3000 to recieve request and packets
http.listen(3000, function(){
    console.log('listening on *:3000');
  });