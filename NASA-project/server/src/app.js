import express from 'express';
import planetsRouter from './routes/planets/planets.router.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(express.json());

// Use planets router
app.use('/planets', planetsRouter);

export default app;
