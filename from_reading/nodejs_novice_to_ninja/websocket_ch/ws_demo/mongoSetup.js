import {MongoClient, ServerApiVersion} from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const mongoUri = process.env.MONGO_URI;
const client = new MongoClient(mongoUri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

async function connectToMongo() {
    try {
        await client.connect();
        db = client.db('chatApp'); // Assuming 'chatApp' is your database name
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

connectToMongo();

export {db};
