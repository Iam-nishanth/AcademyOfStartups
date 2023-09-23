import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import bcrypt from "bcryptjs";
import * as yup from 'yup';


const saltrounds = 10;


const InvestorValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  name: yup.string().required(),
  phoneNo: yup.string().min(10).max(10).required(),
  address: yup.string().required(),
  image: yup.mixed().optional(), // Yup won't validate this field, but it will be present in the schema
  investorType: yup.string().required(),
  investmentRange: yup.string().required(),
  domainsOfInterest: yup.array().of(yup.string()).required(),
  existingInvestments: yup.mixed().optional(), // Yup won't validate this field, but it will be present in the schema
});


export const InvestorRegisterController = async (req, res) => {
  const {
    email,
    password,
    name,
    phoneNo,
    address,
    image,
    investorType,
    investmentRange,
    domainsOfInterest,
    existingInvestments
  } = req.body;

  try {

    await InvestorValidationSchema.validate({ email, password, name, phoneNo, address, image, investorType, investmentRange, domainsOfInterest, existingInvestments });


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
        email, password: hashedPassword, name
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

}




export const InvestorLoginController = async (req, res) => {
  const { email, password } = req.body;

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
}