import express from 'express'
import { LoginController, LogoutController, RegisterController } from '../controller/auth.js';

export const authRouter = express.Router();

authRouter.post('/login', LoginController)
// authRouter.get('/login', CheckSession)
authRouter.post('/register', RegisterController)
authRouter.delete('/logout', LogoutController)

