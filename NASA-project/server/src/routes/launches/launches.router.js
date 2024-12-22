import express from 'express';
import {httpAddNewLaunch, httpGetAllLaunches } from './launches.controller.js';
import { launches } from '../../models/launches.model.js';
import { httpAbortLaunch } from './launches.controller.js';
const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/',httpAddNewLaunch)
launchesRouter.delete('/:id',httpAbortLaunch)

export default launchesRouter;
