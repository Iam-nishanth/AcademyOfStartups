import express from "express";
import { InvestorRegisterController, InvestorLoginController } from "../controller/investor.js";


export const InvestorRouter = express.Router();

InvestorRouter.post('/investor-signup', InvestorRegisterController)

InvestorRouter.post('/investor-login', InvestorLoginController)