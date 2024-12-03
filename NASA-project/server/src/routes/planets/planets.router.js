import express from 'express';
import { getAllPlanets } from './planets.controller.js'; // Correct import


const planetsRouter = express.Router();

// Define the route
planetsRouter.get('/', getAllPlanets);

export default planetsRouter;
