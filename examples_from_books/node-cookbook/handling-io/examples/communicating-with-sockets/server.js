import net from 'net';

// Define the hostname and port for the server to listen on
const HOSTNAME = 'localhost';
const PORT = 3000;

// Create a TCP server and listen for connections on the specified hostname and port
net.createServer((socket) => {
  console.log('Client connected.');

  // Listen for data from the client and send a response
  socket.on('data', (name) => {
    socket.write(`Hello ${name}!`);
  });
}).listen(PORT, HOSTNAME);
