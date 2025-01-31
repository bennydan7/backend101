import http from 'http';
import app from './app.js';
import mongoose from 'mongoose';
import { loadPlanetsData } from './models/planets.model.js';
// import dotenv from 'dotenv'

// dotenv.config();

const PORT = process.env.PORT || 8000;

// Corrected connection string with URL-encoded special character
const MONGO_URL = 'mongodb+srv://nasa-api:7sQYgkJ8phxN6%40z@nasacluster.ohv3u.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster';

const server = http.createServer(app);

mongoose.connection.on('open', () => {
    console.log('MongoDB is connected');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

async function startServer() {
    try {
        
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
        });

        await loadPlanetsData();

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
}

startServer();
