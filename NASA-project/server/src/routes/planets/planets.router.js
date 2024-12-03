import express from 'express';
import {httpgGetAllPlanets } from './planets.controller.js'; // Correct import


const planetsRouter = express.Router();

// Define the route
planetsRouter.get('/', httpgGetAllPlanets);

export default planetsRouter;
