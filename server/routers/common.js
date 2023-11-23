import express from "express";
import Count from "../controller/count.js";
import ContactForm from "../controller/contact.js";
import Events from "../controller/events.js";

const CommonRouter = express.Router();

CommonRouter.get('/api/startups/count', Count.getCount);
CommonRouter.post('/api/contact/email', ContactForm.sendEmails);
CommonRouter.get('/api/get/events', Events.eventNames)
CommonRouter.get('/api/get/events/:id', Events.eventDetails)

export default CommonRouter