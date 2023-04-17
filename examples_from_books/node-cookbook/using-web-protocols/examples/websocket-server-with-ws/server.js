import WebSocket from 'ws';

const WebSocketServer = new WebSocket.Server({
  port: 4000,
});

WebSocketServer.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log('Received: ', msg.toString());
    if (msg === 'Hello') socket.send('World!');
  });
});
