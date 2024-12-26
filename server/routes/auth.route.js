import express from 'express'
import { checkUser } from '../controller/auth.controller.js'

const authRoute = express.Router()  

authRoute.post('/checkUser', checkUser )

export default authRoute