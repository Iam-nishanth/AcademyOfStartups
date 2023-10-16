import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { authRouter } from './routers/auth.js';
import { startupRouter } from "./routers/startups.js";
import cookieParser from "cookie-parser";
import { InvestorRouter } from "./routers/investor.js";


const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: ["http://localhost:3000", 'http://192.168.0.180:3000', 'http://localhost:3001', 'http://192.168.0.180:3001', 'https://pglgl7pl-3000.inc1.devtunnels.ms/'],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "x-access-token", "x-csrf-token"],
  exposedHeaders: ['*', 'authorization'],
  AccessControlAllowOrigin: '*',
}));
app.use(cookieParser());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use('/auth', authRouter);
app.use(startupRouter);
app.use('/auth', InvestorRouter);



app.get('/', (req, res) => {
  res.send('Hello World!');
})



app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);

});
