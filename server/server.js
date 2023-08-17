import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import session from "express-session";
import jwt from "jsonwebtoken";
import { authRouter } from './routers/auth.js';



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

const port = 8080;

app.use('/auth', authRouter);


// ------------Startups--------------

app.get("/startups", async (req, res) => {
    const allStartups = await prisma.startup.findMany();
    res.json(allStartups);
});
app.post("/startups", async (req, res) => {
    const newStartup = await prisma.startup.create({
        data: req.body,
    });
    res.json(newStartup);
});

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


// -----------Login------------

app.get("/login", (req, res) => {
    console.log(req.session.user)
    if (req.session.user) {
        res.status(200).json({ loggedIn: true, user: req.session.user });
    } else {
        res.status(404).json({ loggedIn: false });
    }
})

// app.get('/verified', verfiyJWT, (req, res) => {
//     // res.send('verified')



// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
