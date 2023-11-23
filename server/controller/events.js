import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const Events = {
    eventNames: async (req, res) => {

        const events = await prisma.event.findMany({
            select: {
                id: true,
                name: true,
                subtitle: true,
                dates: true,
                time: true
            }
        });

        res.status(200).json(events);
    },
    eventDetails: async (req, res) => {
        const { id } = req.params;

        try {
            const event = await prisma.event.findUnique({
                where: {
                    id
                }
            });

            res.status(200).json(event);
        }
        catch {
            return res.status(500).json({ message: "Server Error" })
        }
    }
}

export default Events
