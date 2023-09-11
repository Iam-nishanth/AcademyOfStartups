import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const StartupGetController = async (req, res) => {
    const allStartups = await prisma.startup.findMany();
    res.json(allStartups);
}
export const StartupPostController = async (req, res) => {
    try {
        const newStartup = await prisma.business.create({
            data: req.body,
        });
        res.json(newStartup);
    } catch (error) {
        console.error("Error creating startup:", error);
        res.status(500).json({ message: "An error occurred while creating the startup.", error: error });
    }
}

