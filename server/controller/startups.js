import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const StartupGetController = async (req, res) => {
    const allStartups = await prisma.startup.findMany();
    res.json(allStartups);
}
export const StartupPostController = async (req, res) => {
    const newStartup = await prisma.startup.create({
        data: req.body,
    });
    res.json(newStartup);
}
