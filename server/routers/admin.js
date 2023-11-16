import express from "express";
import Admin from "../controller/admin.js";
import EmailVerification from "../middleware/mailOTP/index.js";
import upload from "../middleware/storage/index.js";

export const adminRouter = express.Router();

adminRouter.get("/all-users", Admin.allUsers);
adminRouter.post("/add-user", Admin.addUser);
adminRouter.delete("/delete-user/:id", Admin.deleteUser);

adminRouter.get("/all-businesses", Admin.allBusiness);
adminRouter.post("/add-business", upload.none(), Admin.addBusiness);
adminRouter.put("/update-business/:id", Admin.updateBusiness);
adminRouter.delete("/delete-business/:id", Admin.deleteBusiness);

adminRouter.get("/all-investors", Admin.allInvestors);
adminRouter.post("/add-investor", upload.none(), Admin.addInvestor);
adminRouter.put("/update-investor/:id", Admin.updateInvestor);
adminRouter.delete("/delete-investor/:id", Admin.deleteInvestor);

adminRouter.get("/all-events", Admin.allEvents);
adminRouter.post("/add-event", Admin.addEvent);
// adminRouter.put("/update-event/:id", Admin.updateEvent);
adminRouter.delete("/delete-event/:id", Admin.deleteEvent);

