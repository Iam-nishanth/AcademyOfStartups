import dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as yup from 'yup';
import cookieParser from "cookie-parser";

const registerSchema = yup.object().shape({
  email: yup.string().email().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/).required('Email is required'),
  password: yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*()<>?]).{8,}$/).required('Password is required'),
  name: yup.string().required('Name is required'),
});

const prisma = new PrismaClient();

const saltrounds = 10;

// ----------------ACCESS TOKEN GENERATION----------------
function generateAccessToken(userId) {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "12h",
  });
}









const Auth = {
  // ----------------USER REGISTER----------------
  RegisterController: async (req, res) => {
    const { email, password, name } = req.body;
    try {
      await registerSchema.validate({ email, password, name });

      const hashedPassword = await bcrypt.hash(password, saltrounds);
      const existingUser = await prisma.user.findUnique({
        where: {
          userEmail: email,
        },
      })
      if (existingUser) {
        return res.status(409).json({ message: "User already exists", error: existingUser });
      }

      const newUser = await prisma.user.create({
        data: {
          userEmail: email,
          password: hashedPassword,
          name
        },
      })
      res.status(201).json(newUser);

    }
    catch (error) {
      if (error.name === 'ValidationError') {
        // --------Handle validation errors--------
        const validationErrors = error.errors;
        res.status(400).json({ error: validationErrors });
      } else {
        res.status(500).json({ message: "Internal server error", error: error });
      }
    }
  },
  // ----------------USER LOGIN----------------
  LoginController: async (req, res) => {
    const { email, password } = req.body;
    const Email = email.toLowerCase();

    try {
      const user = await prisma.user.findUnique({
        where: {
          userEmail: Email,
        }
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          const accessToken = generateAccessToken(user.id);
          const business = await prisma.business.findUnique({
            where: {
              businessEmail: user.userEmail,
            },
          })

          res.cookie('jwt', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 100
          })

          res
            .status(200)
            .json({
              auth: true,
              token: accessToken,
              user: user,
              business: business
            });
        } else {
          res.status(401).json({ message: "Incorrect password", error: err });
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error });
    }
  },
  ChangePasswordController: async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.params;

    try {

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          password: true,
        },
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      bcrypt.compare(oldPassword, user.password, async (err, result) => {
        if (result) {
          const hashedPassword = await bcrypt.hash(newPassword, saltrounds);

          await prisma.user.update({
            where: {
              id,
            },
            data: {
              password: hashedPassword,
            },
          })

          return res.status(200).json({ message: "Password updated successfully" });
        } else {
          return res.status(401).json({ message: "Incorrect password" });

        }
      })
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error: error });
    }
  },



}

export default Auth