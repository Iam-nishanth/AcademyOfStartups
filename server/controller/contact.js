import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const AutoMail = async (email, name) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: "support@sudheervarma.com",
            pass: "Thinkpad@2023",
        },
    });

    const mailOptions = {
        from: "Academy of Startups <support@sudheervarma.com>",
        to: email,
        subject: "Form Submitted - Academy of Startups",
        html: `<div style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 20px">
    <div style="font-size: 18px; fontfamily:sans-serif; border-radius: 10px; box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12); width: 800px;padding: 20px">
    <p>Hi <strong>${name}</strong>,</p>
    <p>Thanks for contacting <strong >Academy of Startups</strong></p>
    <p>This automatic reply is just to let you know we received your request and we’ll get back to you with a response as quickly as possible.</p>
    <p>During business hours we usually reply within a couple of hours, evenings and weekends may take us a little bit longer.</p>
    <p>Or, if your request is urgent, feel free to give us a call at <a href="tel:+919948899366" style="color:black; font-weight: bold">+91 99488 99366</a>.</p><p>We look forward to getting you back in business!</p><p>Regards,</p><strong>Academy of Startups Team</strong>
  </div>
  </div>
  `,
    };

    await transporter.sendMail(mailOptions);
};

const MailtoAdmin = async (email, name, subject) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: "support@sudheervarma.com",
            pass: "Thinkpad@2023",
        },
    });
    const mailOptions = {
        from: "Academy of Startups <support@sudheervarma.com>",
        to: "admin@sudheervarma.com",
        subject: "New Contact Form Submission",
        html: `<html
         lang="en"><head><meta charset="UTF-8"><metaname="viewport" content="width=device-widthinitial-scale=10"><title>Contact Form Message</title><style> body {font-family: sans-serif;}h1 {margin-bottom: 20px;}.container {width: 600px;margin: 0 auto;padding: 20px;border: 1px solid #ccc;}.message {margin-bottom: 20px;}</style></head>
         <body><div class="container"><h1>New Contact Form Message</h1><p>Name: ${name}</p><p>Email: ${email}</p><div class="message"><p>Message: ${subject}</p></div><p>Please respond to this message at your earliest convenience.</p></div></body></html>`,
    };
    await transporter.sendMail(mailOptions);
};

const ContactForm = {
    sendEmails: async (req, res) => {
        const { email, name, subject } = req.body;
        try {
            await Promise.all([
                MailtoAdmin(email, name, subject),
                AutoMail(email, name)
            ]);
            res.status(200).json({ message: "Emails sent successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

export default ContactForm;
