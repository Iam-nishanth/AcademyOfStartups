import express from 'express'

import { StartupGetController, StartupPostController } from '../controller/startups.js'

export const startupRouter = express.Router();

startupRouter.get('/startups', StartupGetController)
startupRouter.post('/startups', StartupPostController)
