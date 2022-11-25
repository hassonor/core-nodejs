const express = require('express');
const app = express();
const http = require('http');

const expressServer = http.createServer(app);

const {Server} = require('socket.io')
const io = new Server(expressServer);
 
let buyNsp = io.of("/buy");
buyNsp.on('connection', function(socket){
     buyNsp.emit("MyEvent", "Hello buy")
})

let sellNsp = io.of("/sell");
sellNsp.on('connection', function(socket){
     sellNsp.emit("MyEvent", "Hello sell")
})
  
  

app.get('/', function(req, res){
     res.sendFile(__dirname+"/index.html");
})


expressServer.listen(3000, function (){
     console.log("Server Is now running at port 3000");
})