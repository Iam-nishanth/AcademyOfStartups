import express from 'express'
import { CheckSession, LoginController, RegisterController } from '../controller/auth.js';

export const authRouter = express.Router();

authRouter.post('/login', LoginController)
authRouter.get('/login', CheckSession)
authRouter.post('/register', RegisterController)

