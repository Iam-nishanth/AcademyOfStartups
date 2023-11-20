import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const verifyAdmin = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(400).json({ error: true, message: "Token is required for Authentication" });
    } else {
        try {
            const jwtToken = token.split(" ")[1];
            const decodedToken = jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET || " ");
            const user = await prisma.user.findUnique({
                where: {
                    id: decodedToken.userId
                }
            });
            if (!user) {
                return res.status(404).json({ error: true, message: "Unauthorized: not valid user" });
            }
            if (user.role !== 'ADMIN') {
                return res.status(403).json({ error: true, message: "Unauthorized: not admin" });
            }

            req.body.decodedToken = decodedToken;
            next();
        } catch (err) {
            return res.status(401).json({ error: true, message: err.message });
        }
    }
}

export default verifyAdmin