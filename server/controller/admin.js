import { InvestorValidationSchema, registerSchema } from "../utils/Validation/index.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";


const prisma = new PrismaClient();

const saltrounds = 10;


const Admin = {
    addUser: async (req, res) => {
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
    deleteUser: async (req, res) => {

        const { id } = req.params;

        try {
            const existingUser = await prisma.user.findUnique({
                where: { id: id },
            })

            if (!existingUser) return res.status(404).json({ message: "User not found" });

            const deletedUser = await prisma.user.delete({
                where: { id: id, },
            })
            res.status(200).json({ message: "User deleted", deletedUser: deletedUser });
        }
        catch (error) {
            res.status(500).json({ message: "Error while deleting the user.", error: error });
        }

    },
    addBusiness: async (req, res) => {
        const { business } = req.body;
        const startups = await prisma.business.findMany();

        try {
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
            })
            res.json(newStartup);
        } catch (error) {
            res.status(500).json({ message: "An error occurred while creating the startup.", error: error });
        }
    },
    deleteBusiness: async (req, res) => {
        const { id } = req.params;

        try {
            const existingStartup = await prisma.business.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingStartup) return res.status(404).json({ message: "Startup not found" });

            const deletedStartup = await prisma.business.delete({
                where: {
                    id: id,
                },
                data: req.body.startup,
            });

            res.status(200).json({ message: "Startup Deleted", startup: deletedStartup });
        } catch (error) {
            res.status(500).json({ message: "Error while deleting the startup.", error: error });
        }

    },
    addInvestor: async (req, res) => {
        const {
            email,
            password,
            name,
            gender,
            phoneNo,
            address,
            image,
            investorType,
            investmentRange,
            domainsOfInterest,
            existingInvestments
        } = req.body;

        try {

            await InvestorValidationSchema.validate({ email, password, name, phoneNo, gender, address, image, investorType, investmentRange, domainsOfInterest, existingInvestments });


            const existingInvestor = await prisma.investor.findUnique({
                where: {
                    email,
                },
            })

            if (existingInvestor) {
                return res.status(409).json({ error: "Investor already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, saltrounds);

            const newInvestor = await prisma.investor.create({
                data: {
                    email, password: hashedPassword, name, gender
                }
            })
            const newInvestorInfo = await prisma.investorInfo.create({
                data: {
                    PhoneNo: phoneNo,
                    Address: address,
                    Image: image,
                    InvestorType: investorType,
                    InvestmentRange: investmentRange,
                    DomainsOfInterest: domainsOfInterest,
                    ExistingInvestments: existingInvestments,
                    investor: {
                        connect: {
                            id: newInvestor.id
                        }
                    }
                }
            })

            return res.status(201).json({ message: "Investor created successfully", newInvestor: newInvestor, newInvestorInfo: newInvestorInfo });

        } catch (error) {
            if (error.name === 'ValidationError') {
                // --------Handle validation errors--------
                const validationErrors = error.errors;
                res.status(400).json({ error: validationErrors });
            } else {
                res.status(500).json({ message: "Internal server error", error: error });
            }
        }

    },
    deleteInvestor: async (req, res) => {
        const { id } = req.params;

        try {
            const existingInvestor = await prisma.investor.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingInvestor) return res.status(404).json({ message: "Investor not found" });

            const deletedInvestorInfo = await prisma.investorInfo.delete({
                where: {
                    id: id,
                },
            })
            const deletedInvestor = await prisma.investor.delete({
                where: {
                    id: id,
                },
            })

            res.status(200).json({ message: "Investor Deleted", investor: deletedInvestor, investorInfo: deletedInvestorInfo });
        }
        catch (error) {
            res.status(500).json({ message: "Error while deleting the investor.", error: error });
        }
    }

}

export default Admin;