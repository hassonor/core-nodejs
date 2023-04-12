import net from 'net';

// Define the hostname and port of the server to connect to
const HOSTNAME = 'localhost';
const PORT = 3000;

// Create a TCP client and connect to the server
const socket = net.connect(PORT, HOSTNAME);

// Send data to the server by writing to the socket
socket.write('World');

// Listen for data from the server and log it to the console
socket.on('data', (data) => {
  console.log(data.toString());
});
