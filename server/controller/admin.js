import dotenv from "dotenv";
dotenv.config();

import {
  InvestorValidationSchema,
  registerSchema,
} from "../utils/Validation/index.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { encryptResponse } from "../utils/encryption/index.js";

const prisma = new PrismaClient();

const saltrounds = 10;

function checkBusinessPresence(users) {
  return users.some(user => user.business != null);
}

const Admin = {
  // -------------------------User Controllers-------------------------

  allUsers: async (req, res) => {
    try {
      const users = await prisma.user.findMany({
        include: {
          businesses: {
            select: {
              id: true
            }
          }
        }
      });
      const response = encryptResponse(users, process.env.ENCRYPTION_KEY);
      res.status(200).json({ users: response });
    } catch (error) {
      res.status(500).json({ message: "Error while getting the users.", error });
    }
  },


  addUser: async (req, res) => {
    const { email, password, name } = req.body;

    try {
      await registerSchema.validate({ email, password, name });

      const hashedPassword = await bcrypt.hash(password, saltrounds);
      const existingUser = await prisma.user.findUnique({
        where: {
          userEmail: email,
        },
      });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const newUser = await prisma.user.create({
        data: {
          userEmail: email,
          password: hashedPassword,
          name,
        },
        select: {
          id: true,
          name: true,
          userEmail: true,
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
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
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;

    try {
      const existingUser = await prisma.user.findUnique({
        where: { id: id },
      });
      const hasBusiness = await prisma.business.findUnique({
        where: { businessEmail: existingUser.userEmail },
      })

      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      if (hasBusiness) {
        const deleteBusiness = await prisma.business.delete({
          where: {
            businessEmail: existingUser.userEmail
          }
        })
      }

      const deletedUser = await prisma.user.delete({
        where: { id: id },
        select: {
          id: true,
          name: true,
          userEmail: true,
        },
      });



      res
        .status(200)
        .json({ message: "User deleted", deletedUser: deletedUser });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while deleting the user.", error: error });
    }
  },

  // -----------------------Business Controllers-----------------------

  allBusiness: async (req, res) => {
    try {
      const businesses = await prisma.business.findMany();

      const response = encryptResponse(businesses, process.env.ENCRYPTION_KEY);

      res.status(200).json({ businesses: response });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while getting businesses.", error: error });
    }
  },
  addBusiness: async (req, res) => {
    const { ownerName, businessEmail, phoneNo, businessName, businessCategory, registrationType, productOrService, incNo, companyWebsite, panNo, gstNo, itrPerYear, address, image, Status } = req.body;
    const businessData = {
      ownerName, businessEmail, phoneNo, businessName, businessCategory, registrationType, productOrService, incNo, companyWebsite, panNo, gstNo, itrPerYear, address, Logo: image, Status
    };
    const startups = await prisma.business.findMany();

    const startupExists = startups.some(startup => {
      return (
        startup.incNo === incNo ||
        startup.gstNo === gstNo ||
        startup.panNo === panNo ||
        startup.phoneNo === phoneNo
      );
    });

    if (startupExists) {
      return res.status(409).json({ message: "Startup already exists with the given details" });
    }

    try {
      const newStartup = await prisma.business.create({
        data: {
          ...businessData,
        }
      });
      res.json(newStartup);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while creating the startup.", error: error });
    }
  },

  updateBusiness: async (req, res) => {
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

      res.status(200).json({ message: "Startup updated" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while updating the startup.", error: error });
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

      if (!existingStartup)
        return res.status(404).json({ message: "Startup not found" });

      const deletedStartup = await prisma.business.delete({
        where: {
          id: id,
        },
        data: req.body.startup,
        select: {
          businessName: true,
          businessEmail: true,
        },
      });

      res
        .status(200)
        .json({ message: "Startup Deleted", startup: deletedStartup });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while deleting the startup.", error: error });
    }
  },

  // -----------------------Investor Controllers-----------------------

  allInvestors: async (req, res) => {
    try {
      const investors = await prisma.investor.findMany({
        include: {
          InvestorInfo: true,
        },
      });

      const response = encryptResponse(
        investors,
        process.env.ENCRYPTION_KEY
      );

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
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
      existingInvestments,
    } = req.body;
    const domainsOfInterest = JSON.parse(req.body.domainsOfInterest);

    try {
      await InvestorValidationSchema.validate({
        email,
        password,
        name,
        phoneNo,
        gender,
        address,
        image,
        investorType,
        investmentRange,
        domainsOfInterest,
        existingInvestments,
      });

      const existingInvestor = await prisma.investor.findUnique({
        where: {
          email,
        },
      });

      if (existingInvestor) {
        return res.status(409).json({ error: "Investor already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, saltrounds);

      const newInvestor = await prisma.investor.create({
        data: {
          email,
          password: hashedPassword,
          name,
          gender,
        },
      });
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
              id: newInvestor.id,
            },
          },
        },
      });

      return res.status(201).json({
        message: "Investor created successfully",
      });
    } catch (error) {
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
  },
  deleteInvestor: async (req, res) => {
    const { id } = req.params;

    try {
      const existingInvestor = await prisma.investor.findUnique({
        where: {
          id: id,
        },
      });

      const investorInfo = await prisma.investorInfo.findUnique({
        where: {
          id: id,
        },
      });

      if (!existingInvestor) {
        return res.status(404).json({ message: "Investor not found" });
      }

      if (investorInfo) {
        await prisma.investorInfo.delete({
          where: {
            id: id,
          },
        });
      }

      const deletedInvestor = await prisma.investor.delete({
        where: {
          id: id,
        },
      });

      res.status(200).json({
        message: "Investor Deleted",
        deletedInvestor,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while deleting the investor.", error: error });
    }
  },

  // -------------------------Events-------------------------

  allEvents: async (req, res) => {
    try {
      const events = await prisma.event.findMany();

      const response = encryptResponse(events, process.env.ENCRYPTION_KEY);

      res.status(200).json({ events: response });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },

  addEvent: async (req, res) => {
    const { name, subtitle, dates, time, location, description, entryFee, coverImage } = req.body;
    const event = {
      name,
      subtitle,
      dates,
      time,
      location,
      description,
      entryFee,
      coverImage
    };

    try {
      const newEvent = await prisma.event.create({
        data: event,
      });

      res.status(201).json({ message: "Event created successfully", newEvent });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  updateEvent: async (req, res) => {
    const { id } = req.params;
    const { event } = req.body;

    try {
      const updatedEvent = await prisma.event.update({
        where: {
          id: id,
        },
        data: event,
      });

      res
        .status(200)
        .json({ message: "Event updated successfully", updatedEvent });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  deleteEvent: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedEvent = await prisma.event.delete({
        where: {
          id: id,
        },
      });

      res.status(200).json({ message: "Event deleted", deletedEvent });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
};

export default Admin;
