import express from 'express'
import { LoginController, RegisterController } from '../controller/auth.js';

export const authRouter = express.Router();

authRouter.post('/login', LoginController)
authRouter.post('/register', RegisterController)

