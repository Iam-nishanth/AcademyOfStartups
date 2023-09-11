import dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as yup from 'yup';

const registerSchema = yup.object().shape({
  email: yup.string().email().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/).required(),
  password: yup.string().min(8).required(),
});

const prisma = new PrismaClient();

const saltrounds = 10;

// Helper function to generate access token
function generateAccessToken(userId) {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15s", // Adjust the expiration as needed
  });
}

export const LoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    bcrypt.compare(password, user.password, async (err, result) => {
      if (result) {
        const accessToken = generateAccessToken(user.id);
        const refreshToken = jwt.sign(
          { userId: user.id },
          process.env.REFRESH_TOKEN_SECRET
        );

        // Store the refresh token in the database
        const newRefreshToken = await prisma.refreshToken.create({
          data: {
            token: refreshToken,
            userId: user.id,
          },
        });

        // Fetch startup details if available
        let startup = null;
        const existingStartup = await prisma.startup.findUnique({
          where: {
            businessEmail: email,
          },
        });

        if (existingStartup) {
          startup = existingStartup;
        }

        res
          .status(200)
          .json({
            auth: true,
            accessToken,
            refreshToken,
            user: user,
            startup: startup,
          });
      } else {
        res.status(401).json({ error: "Incorrect password" });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};




export const RegisterController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate the email and password
    await registerSchema.validate({ email, password });

    const hashedPassword = await bcrypt.hash(password, saltrounds);

    // Create the user record
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });



    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Handle validation errors
      const validationErrors = error.errors;
      res.status(400).json({ error: validationErrors });
    } else {
      res.status(500).json({ message: "Internal server error", error: error });
    }
  }
};



export const LogoutController = async (req, res) => {
  const { userId } = req.body;

  try {
    // Delete all refresh tokens associated with the user
    await prisma.refreshToken.deleteMany({
      where: {
        userId: userId,
      },
    });

    res.status(204).json("Logout success"); // Successful logout

    console.log("Logged out");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
