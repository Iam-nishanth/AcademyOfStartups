import dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import { registerSchema } from "../utils/Validation";

const prisma = new PrismaClient();
const saltrounds = 10;

const Register = {

    RegisterController: async (req, res) => {
        const { email, password, name, business } = req.body;

        try {
            await registerSchema.validate({ email, password, name });

            const hashedPassword = await bcrypt.hash(password, saltrounds);

            const existingUser = await prisma.user.findUnique({
                where: {
                    userEmail: email
                }
            });
            if (existingUser) {
                return res
                    .status(409)
                    .json({ message: "User already exists", error: existingUser });
            }

            const newUser = await prisma.user.create({
                data: {
                    userEmail: email,
                    password: hashedPassword,
                    name
                }
            });
            const newBusiness = await prisma.business.create({
                data: business
            })

        }
        catch (error) {
            if (error.name === "ValidationError") {
                // --------Handle validation errors--------
                const validationErrors = error.errors;
                res.status(400).json({ error: validationErrors });
            } else {
                res
                    .status(500)
                    .json({ message: "Internal server error", error: error });
            }
        }
    }
}