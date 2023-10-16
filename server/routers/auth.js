import express from 'express'
import Auth from '../controller/auth.js';
import verifyToken from '../middleware/index.js';


export const authRouter = express.Router();

authRouter.post('/login', Auth.LoginController)
authRouter.post('/register', Auth.RegisterController)
authRouter.put('/user/change-password/:id', verifyToken, Auth.ChangePasswordController)

