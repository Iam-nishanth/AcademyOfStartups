import express from 'express'
import Admin from '../controller/admin.js'

export const adminRouter = express.Router()

adminRouter.post('/add-user', Admin.addUser)
adminRouter.delete('/delete-user/:id', Admin.deleteUser)

adminRouter.post('/add-business', Admin.addBusiness)
adminRouter.delete('/delete-business/:id', Admin.deleteBusiness)

adminRouter.post('/add-investor', Admin.addInvestor)
adminRouter.delete('/delete-investor/:id', Admin.deleteInvestor)



