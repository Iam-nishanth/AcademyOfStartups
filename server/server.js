import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { authRouter } from "./routers/auth.js";
import { startupRouter } from "./routers/startups.js";
import cookieParser from "cookie-parser";
import { InvestorRouter } from "./routers/investor.js";
import CommonRouter from "./routers/common.js";
import { adminRouter } from "./routers/admin.js";

const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://192.168.55.104:3000",
      "http://192.168.0.103:3000",
      "https://academy-of-startups.vercel.app",
      "https://dev.academyofstartups.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "x-access-token",
      "x-csrf-token",
      "Location",
    ],
    exposedHeaders: ["*", "authorization"],
    AccessControlAllowOrigin: "*",
  })
);
// app.use(cors());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use("/auth", authRouter);
app.use(startupRouter);
app.use("/auth", InvestorRouter);
app.use(CommonRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});

export default app;
