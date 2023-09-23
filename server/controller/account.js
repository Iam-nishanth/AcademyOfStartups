import dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();



const saltRounds = 10;

export const ChangePasswordController = async (req, res) => {
  const { id, token, currentPassword, newPassword } = req.body;

  try {
    // Check if the token is valid.
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Get the user from the database.
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

    // Compare the current password with the one in the database.
    bcrypt.compare(currentPassword, user.password, async (err, result) => {
      if (result) {
        // Hash the new password.
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        // Update the password in the database.
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
};

