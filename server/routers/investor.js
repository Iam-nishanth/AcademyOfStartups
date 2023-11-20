import express from "express";
import Investor from "../controller/investor.js";
import upload from "../middleware/storage/index.js";

export const InvestorRouter = express.Router();

InvestorRouter.post(
  "/investor-signup",
  upload.none(),
  Investor.InvestorRegisterController
);

InvestorRouter.post("/investor-login", Investor.InvestorLoginController);

InvestorRouter.get("/investors", Investor.GetAllInvestors);

InvestorRouter.get("/investors/get/startups/:id", Investor.GetStartups);
