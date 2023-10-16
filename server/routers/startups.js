import express from 'express'

import Startup from '../controller/startups.js';
import verifyToken from '../middleware/index.js';

export const startupRouter = express.Router();

startupRouter.get('/startups', verifyToken, Startup.StartupGetController)
startupRouter.post('/startups/add', Startup.StartupPostController)
startupRouter.put('/startup/update/:id', verifyToken, Startup.StartupPutController)
startupRouter.delete('/startups/delete/:id', verifyToken, Startup.StartupDeleteController)
