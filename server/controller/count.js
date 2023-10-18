import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const Count = {
    getCount: async (req, res) => {
        try {

            const StartupCount = await prisma.business.count();
            const InvestorCount = await prisma.investor.count();

            res.status(200).json({
                startupCount: StartupCount.toString(),
                investorCount: InvestorCount.toString()
            })

        } catch (error) {
            console.log(error);
        }


    },
}

export default Count