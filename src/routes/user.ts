import { Router } from "express"
import { UserController } from "../controllers/UserController"
const route = Router()
const userController = new UserController()

route.get('/', userController.index)
route.post('/', userController.store)
route.put('/', userController.update)
route.delete('/', userController.destroy)

export default route;