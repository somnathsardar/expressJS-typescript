import express from "express"
import auth from './middlewares/auth'
import userRoutes from './routes/user'
import postRoutes from'./routes/post'

const routes = express()

routes.use('/user', auth, userRoutes)
routes.use('/post', postRoutes)

export default routes