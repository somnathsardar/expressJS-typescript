import { Router } from "express"
import { PostController } from "../controllers/PostController"
const route = Router()
const postController = new PostController()

route.get('/', postController.index)
route.post('/', postController.store)
route.put('/', postController.update)
route.delete('/', postController.destroy)

export default route;