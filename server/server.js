import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { authRouter } from './routers/auth.js';
import { startupRouter } from "./routers/startups.js";

const app = express();
const prisma = new PrismaClient();

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token", "x-csrf-token"],
    exposedHeaders: ['*', 'authorization'],
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use('/auth', authRouter);
app.use(startupRouter);






app.post('/users', async (req, res) => {
  const { username } = req.body;
//   console.log(userId)


  try {
    const user = await prisma.user.findUnique({
      where: {
        id: username,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    let startup = null;
        const existingStartup = await prisma.startup.findUnique({
          where: {
            businessEmail: user.email,
          },
        });

        if (existingStartup) {
          startup = existingStartup;
        }

    res.status(200).json({user: user, startup: startup});
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})



app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});
