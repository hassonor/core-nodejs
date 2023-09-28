// Import essential modules
import express from 'express';
import WebSocket, {WebSocketServer} from 'ws';
import compression from 'compression';
import {fileURLToPath} from 'url';
import {dirname, sep} from 'path';

// Determine the directory paths for various resources in the app
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep;
const cfg = {
    title: 'WebSocket Chat',
    port: process.env.PORT || 3000,
    wsPort: process.env.WSPORT || 3001,
    dir: {
        root: __dirname,
        static: __dirname + 'static' + sep,
        views: __dirname + 'views' + sep,
    },
    nameLen: 15,
    msgLen: 200
};

// Initialize Express application
const app = express();

// Enhance security by removing server technology identification header
app.disable('x-powered-by');

// Configure the view engine for EJS templating
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);

// Enable gzip compression for responses
app.use(compression());

// Serve static assets from the defined directory
app.use(express.static(cfg.dir.static));

// Define a route to render the chat view
app.get('/chat', (req, res) => {
    res.render('chat', cfg);
});

// Fallback for unhandled routes, returning a 404 error
app.use((req, res) => {
    res.status(404).send("Not Found");
});

// Start the web server on the specified port
app.listen(cfg.port, () => {
    console.log(`Server listening at http://localhost:${cfg.port}`);
});

// A Map to associate WebSocket connections with user names
const userMap = new Map();

// Initialize WebSocket server
const ws = new WebSocketServer({port: cfg.wsPort});
let userCount = 0;  // Track the number of connected users
const recentMessages = [];

// Handle new client connections
ws.on('connection', (socket, req) => {
    userCount++;  // Increment user count
    broadcastUserCount();  // Notify all clients of updated user count
    console.log(`connection from ${req.socket.remoteAddress}`);

    // Handle incoming messages
    socket.on('message', (msg, binary) => {
        const parsedMsg = JSON.parse(msg);

        // Store the recent message
        recentMessages.push(parsedMsg);
        if (recentMessages.length > 30) {
            recentMessages.shift();
        }


        // If a new user enters the chat, save their name
        if (parsedMsg.name && parsedMsg.msg === 'entered the chat room') {
            userMap.set(socket, parsedMsg.name);
        }

        // Forward received message to all clients
        ws.clients.forEach(client => {
            client.readyState === WebSocket.OPEN && client.send(msg, {binary});
        });
    });

    // Handle client disconnection
    socket.on('close', () => {
        console.log(`disconnection from ${req.socket.remoteAddress}`);

        // Send a notification about the user's departure
        const userName = userMap.get(socket) || 'Unknown User';
        const disconnectMessage = JSON.stringify({
            name: "System",
            msg: `${userName} has left the chat`
        });

        ws.clients.forEach(client => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(disconnectMessage);
            }
        });

        userCount--;  // Decrement user count
        broadcastUserCount();  // Notify all clients of updated user count
    });
});

// Function to broadcast the current user count to all connected clients
function broadcastUserCount() {
    const message = JSON.stringify({
        type: 'userCount',
        count: userCount
    });

    ws.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}

export {cfg, app};
