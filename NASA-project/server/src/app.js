import express from 'express';
import planetsRouter from './routes/planets/planets.router.js';

const app = express();

// Middleware
app.use(express.json());

// Use planets router
app.use('/planets', planetsRouter);

export default app;
