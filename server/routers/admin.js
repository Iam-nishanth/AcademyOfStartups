import express from 'express'
import Admin from '../controller/admin.js'

export const adminRouter = express.Router()

adminRouter.get('/all-users', Admin.allUsers)
adminRouter.post('/add-user', Admin.addUser)
adminRouter.delete('/delete-user/:id', Admin.deleteUser)

adminRouter.get('/all-businesses', Admin.allBusiness)
adminRouter.post('/add-business', Admin.addBusiness)
adminRouter.put('/update-business/:id', Admin.updateBusiness)
adminRouter.delete('/delete-business/:id', Admin.deleteBusiness)

adminRouter.get('/all-investors', Admin.allInvestors)
adminRouter.post('/add-investor', Admin.addInvestor)
adminRouter.put('/update-investor/:id', Admin.updateInvestor)
adminRouter.delete('/delete-investor/:id', Admin.deleteInvestor)



