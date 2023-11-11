import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Generate a random OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

// Send email with OTP
const sendEmailWithOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "nishanth_alapati@outlook.com",
      pass: "Nishanth@21",
    },
  });

  const mailOptions = {
    from: "nishanth_alapati@outlook.com",
    to: email,
    subject: "OTP Verification",
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="https://academyofstartups.com" style="font-size:35px;color: #001336;text-decoration:none;font-weight:600">Academy of Startus</a>
      </div>
      <p style="font-size:23px">Hi,</p>
      <p style="font-size:20px">Thank you for Joining us. Use the following OTP to complete your verification procedures. OTP is valid for 5 minutes</p>
      <h2 style="background: #001336;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
      <p style="font-size:0.9em;">Regards,<br />Academy of Startups</p>
      <hr style="border:none;border-top:1px solid #eee" />
    </div>
  </div>`,
  };

  await transporter.sendMail(mailOptions);
};

const EmailVerification = {
  // Generate and send OTP
  generateAndSendOTP: async (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();

    try {
      // Save the OTP in the database for later verification
      const user = await prisma.user.findUnique({
        where: {
          userEmail: email,
        },
      });

      const addOTP = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          OTP: otp.toString(),
        },
      });

      await sendEmailWithOTP(email, otp);

      res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to send OTP" });
    }
  },

  resendOTP: async (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();

    try {
      // Save the OTP in the database for later verification
      const user = await prisma.user.findUnique({
        where: {
          userEmail: email,
        },
      });

      const addOTP = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          OTP: otp.toString(),
        },
      });

      await sendEmailWithOTP(email, otp);

      res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send OTP" });
    }
  },

  // Verify OTP
  verifyOTP: async (req, res) => {
    const { email, otp } = req.body;

    // Retrieve the OTP from the database or cache
    // and compare it with the OTP provided by the user
    // You can use a library like Redis or MongoDB for this purpose

    // For the sake of this example, we'll compare the OTP directly
    if (otp === "123456") {
      res.status(200).json({ message: "OTP verified successfully" });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  },
};

export default EmailVerification;
