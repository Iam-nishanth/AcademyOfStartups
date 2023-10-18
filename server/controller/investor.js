import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import bcrypt from "bcryptjs";
import * as yup from 'yup';


const saltrounds = 10;


const InvestorValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  name: yup.string().required(),
  gender: yup.string().required(),
  phoneNo: yup.string().min(10).max(10).required(),
  address: yup.string().required(),
  image: yup.mixed().optional(), // Yup won't validate this field, but it will be present in the schema
  investorType: yup.string().required(),
  investmentRange: yup.string().required(),
  domainsOfInterest: yup.array().of(yup.string()).required(),
  existingInvestments: yup.mixed().optional(), // Yup won't validate this field, but it will be present in the schema
});


const Investor = {

  InvestorRegisterController: async (req, res) => {
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

  InvestorLoginController: async (req, res) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;



    try {

      const investor = await prisma.investor.findUnique({
        where: {
          email,
        },
      });


      if (!investor) {
        return res.status(404).json({ message: "Investor not found" });
      }

      bcrypt.compare(password, investor.password, async (err, result) => {
        if (result) {
          const investorInfo = await prisma.investorInfo.findUnique({
            where: {
              id: investor.id,
            },
          })

          res
            .status(200)
            .json({
              auth: true,
              investor: investor,
              investorInfo: investorInfo

            });
        } else {
          res.status(401).json({ message: "Incorrect password", error: err });
        }
      });

    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error });
    }
  },

  GetAllInvestors: async (req, res) => {
    try {
      const investors = await prisma.investor.findMany({
        include: {
          InvestorInfo: true
        }
      });
      // console.log(investors);
      res.status(200).json({ investors });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error", error });
    }
  },

  GetStartups: async (req, res) => {
    const { id } = req.params


    try {

      if (!id) {
        return res.status(401).json({ message: 'No ID given' })
      }
      const investor = await prisma.investor.findUnique({
        where: {
          id,
        },
      });

      if (!investor) {
        return res.status(404).json({ message: "Investor not found" });
      }

      const startups = await prisma.business.findMany();

      res.status(200).json({ startups })
    }
    catch (error) {
      console.log(error)
      res.status(500).json({ message: "Internal Server error", error: error })
    }
  }

}

export default Investor