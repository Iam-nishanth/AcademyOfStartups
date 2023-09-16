import express  from "express";
import { ChangePasswordController } from "../controller/account.js";

export const Accountrouter = express.Router();



Accountrouter.post('/update-password', ChangePasswordController);