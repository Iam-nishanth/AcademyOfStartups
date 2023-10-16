import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const Startup = {


    StartupGetController: async (req, res) => {
        const allStartups = await prisma.business.findMany();
        const startupNames = allStartups.map((startup) => {
            return {
                id: startup.id,
                BusinessName: startup.businessName,
                verified: startup.isVerified,
            };
        });
        res.json(startupNames);
    },
    StartupPostController: async (req, res) => {
        const { business } = req.body;
        const startups = await prisma.business.findMany();



        // try {
        startups.map((startup) => {

            if (startup.incNo === business.incNo) {
                return res.status(409).json({ message: "Startup already exists with the given INC" });
            }
            else if (startup.gstNo === business.gstNo) {
                return res.status(409).json({ message: "Startup already exists with the given GST" });
            }
            else if (startup.panNo === business.panNo) {
                return res.status(409).json({ message: "Startup already exists with the given PAN" });
            }
            else if (startup.phoneNo === business.phoneNo) {
                return res.status(409).json({ message: "Startup already exists with the given Phone Number" });
            }
        })
        const newStartup = await prisma.business.create({
            data: business,
        });
        res.json(newStartup);
        // } catch (error) {
        //     res.status(500).json({ message: "An error occurred while creating the startup.", error: error });
        // }
    },

    StartupPutController: async (req, res) => {
        const { id } = req.params;

        try {
            const existingStartup = await prisma.business.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingStartup) {
                return res.status(404).json({ message: "Startup not found" });
            }

            const updatedStartup = await prisma.business.update({
                where: {
                    id: id,
                },
                data: req.body.startup,
            });

            res.status(200).json({ message: "Startup updated", startup: updatedStartup });
        } catch (error) {
            res
                .status(500)
                .json({ message: "Error while updating the startup.", error: error });
        }
    },

    StartupDeleteController: async (req, res) => {

        if (!req.body.password) {
            return res.status(401).json({ message: "No password given" });
        }

        const token = req.headers.authorization.split(" ")[1];
        const { id } = req.params;
        const { password } = req.body

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        try {

            const user = await prisma.user.findUnique({
                where: {
                    id: decodedToken.userId,
                },
            })

            if (!user) {
                return res.status(401).json({ message: "Unauthorized: not valid user" });
            }
            const existingStartup = await prisma.business.findUnique({
                where: {
                    id: id,
                }
            })

            if (!existingStartup) {
                return res.status(404).json({ message: "Startup not found" });
            }
            bcrypt.compare(password, user.password, async (err, result) => {
                if (result) {
                    const deletedStartup = await prisma.business.delete({
                        where: {
                            id: id,
                        },
                    })
                    res.status(200).json({ message: "Startup deleted", startup: deletedStartup });
                }
                else {
                    return res.status(401).json({ message: "Incorrect password", error: err });
                }
            })

        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Error while deleting the startup.", error: error });
        }
    }


}
export default Startup