import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


const prisma = new PrismaClient();

const saltrounds = 10;



export const LoginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    const id = user?.id;
    const token = jwt.sign({ id }, 'jwtSecrect', {
        expiresIn: 60 * 60 * 24,
    })

    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            req.session.user = user;
            res.status(200).json({ user: user, auth: true, token: token });
        } else {
            res.status(401).json({ error: "Incorrect password" });
        }
    });
}

export const RegisterController = async (req, res) => {
    const { email, password } = req.body;

    bcrypt.hash(password, saltrounds, async (err, hash) => {
        const newStartup = await prisma.user.create({
            data: {
                email: email,
                password: hash,
            },
        });
        res.json(newStartup);
    });
}

export const CheckSession = (req, res) => {
    console.log(req.session.user)
    if (req.session.user) {
        res.status(200).json({ loggedIn: true, user: req.session.user });
    } else {
        res.status(404).json({ loggedIn: false });
    }
}