import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import session from "express-session";
import jwt from "jsonwebtoken";
import { authRouter } from './routers/auth.js';
import { startupRouter } from "./routers/startups.js";

const app = express();
const prisma = new PrismaClient();

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token", "x-csrf-token"],
    exposedHeaders: ['*', 'authorization'],
}));

// app.use(cookieParser());

app.use(session({
    key: "user_id",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000 * 60 * 24,
        // secure: false
    },
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use('/auth', authRouter);
app.use(startupRouter);



const verfiyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        res.send('Unauthorized')
    }
    else {
        jwt.verify(token, 'jwtSecrect', (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: 'Failed to authenticate token' })
            } else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
