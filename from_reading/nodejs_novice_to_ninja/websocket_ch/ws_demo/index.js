// Import necessary modules
import express from 'express';
import WebSocket, {WebSocketServer} from 'ws';
import compression from 'compression';
import {fileURLToPath} from 'url';
import {dirname, sep} from 'path';

// Load MongoDB setup and establish a connection
import {db} from './mongoSetup.js';

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

// Initialize Express app
const app = express();

// Express configurations
app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);
app.use(compression());
app.use(express.static(cfg.dir.static));

// Define routes
app.get('/', (req, res) => res.redirect('/chat'));
app.get('/chat', (req, res) => res.render('chat', cfg));
app.use((req, res) => {
    res.status(404).send("Not Found");
});

// Start the Express server
app.listen(cfg.port, () => {
    console.log(`Server listening at http://localhost:${cfg.port}`);
});

// Map to track connected users
const userMap = new Map();

// Initialize WebSocket server
const ws = new WebSocketServer({port: cfg.wsPort});
let userCount = 0;

// Handle new WebSocket connections
ws.on('connection', (socket, req) => {
    userCount++;
    broadcastUserCount();
    console.log(`connection from ${req.socket.remoteAddress}`);

    // Handle incoming messages from clients
    socket.on('message', async (msg, binary) => {
        const parsedMsg = JSON.parse(msg);
        const messagesCollection = db.collection('messages');

        // If a user just entered the chat room
        if (parsedMsg.name && parsedMsg.msg === 'entered the chat room') {
            userMap.set(socket, parsedMsg.name);

            // Send recent messages to the newly connected user
            const recentMessages = (await messagesCollection.find().sort({_id: -1}).limit(30).toArray()).reverse();

            for (let message of recentMessages) {
                socket.send(JSON.stringify(message));
            }
        }

        // Broadcast the message to all connected clients
        ws.clients.forEach(client => {
            client.readyState === WebSocket.OPEN && client.send(msg, {binary});
        });

        // Store the message in the database
        await messagesCollection.insertOne(parsedMsg);
    });

    // Handle client disconnections
    socket.on('close', async () => {
        console.log(`disconnection from ${req.socket.remoteAddress}`);
        const userName = userMap.get(socket) || 'Unknown User';
        const disconnectMessage = {
            name: "System",
            msg: `${userName} has left the chat`
        };

        // Notify other clients of the disconnection
        ws.clients.forEach(client => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(disconnectMessage));
            }
        });

        // Store the disconnect message in the database
        const messagesCollection = db.collection('messages');
        try {
            await messagesCollection.insertOne(disconnectMessage);
        } catch (err) {
            console.error("Error inserting disconnect message:", err);
        }

        userCount--;
        broadcastUserCount();
    });
});

// Function to broadcast the current user count to all clients
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

// Export configurations and app for potential external use
export {cfg, app};
