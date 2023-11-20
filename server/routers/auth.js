import express from "express";
import Auth from "../controller/auth.js";
import EmailVerification from "../middleware/mailOTP/index.js";

export const authRouter = express.Router();

authRouter.post("/login", Auth.LoginController);
authRouter.post("/register", Auth.RegisterController);
authRouter.put("/user/change-password/:id", Auth.ChangePasswordController);

authRouter.post("/verify-user", EmailVerification.generateAndSendOTP);
authRouter.post("/verify-user/resend", EmailVerification.resendOTP)
authRouter.post("/verify-user/verify", Auth.verifyOTP);
