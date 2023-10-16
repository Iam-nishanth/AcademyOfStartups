import express from "express";
import Investor from "../controller/investor.js";
import verifyToken from '../middleware/index.js';


export const InvestorRouter = express.Router();

InvestorRouter.post('/investor-signup', Investor.InvestorRegisterController)

InvestorRouter.post('/investor-login', Investor.InvestorLoginController)

InvestorRouter.get('/investors', verifyToken, Investor.GetAllInvestors)