import express from "express";
import Count from "../controller/count.js";

const CountRouter = express.Router();

CountRouter.get('/auth/startups/count', Count.getCount);

export default CountRouter