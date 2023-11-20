import express from "express";
import Admin from "../controller/admin.js";
import upload from "../middleware/storage/index.js";
import verifyAdmin from "../middleware/verifyAdmin/index.js";

export const adminRouter = express.Router();

adminRouter.get("/all-users", verifyAdmin, Admin.allUsers);
adminRouter.post("/add-user", verifyAdmin, Admin.addUser);
adminRouter.delete("/delete-user/:id", verifyAdmin, Admin.deleteUser);

adminRouter.get("/all-businesses", verifyAdmin, Admin.allBusiness);
adminRouter.post("/add-business", verifyAdmin, upload.none(), Admin.addBusiness);
adminRouter.delete("/delete-business/:id", verifyAdmin, Admin.deleteBusiness);

adminRouter.get("/all-investors", verifyAdmin, Admin.allInvestors);
adminRouter.post("/add-investor", verifyAdmin, upload.none(), Admin.addInvestor);
adminRouter.delete("/delete-investor/:id", verifyAdmin, Admin.deleteInvestor);

adminRouter.get("/all-events", verifyAdmin, Admin.allEvents);
adminRouter.post("/add-event", verifyAdmin, Admin.addEvent);
adminRouter.delete("/delete-event/:id", verifyAdmin, Admin.deleteEvent);

