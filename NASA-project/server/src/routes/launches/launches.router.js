import express from 'express';
import {httpAddNewLaunch, httpGetAllLaunches } from './launches.controller.js';
import { launches } from '../../models/launches.model.js';

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/',httpAddNewLaunch)

export default launchesRouter;
