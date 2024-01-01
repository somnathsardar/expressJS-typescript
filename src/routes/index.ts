import express, { Request, Response } from "express"
import auth from '../middlewares/auth'
import userRoutes from './user'
import postRoutes from'./post'

const routes = express()

routes.use('/user', auth, userRoutes)
routes.use('/post', postRoutes)

export default routes