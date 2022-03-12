import { Request, Response, Router } from "express"
const route = Router()

route.get('/', (req:Request, res:Response)=>{
  res.send("Post index route")
})

route.post('/', (req:Request, res:Response)=>{
  res.send("Post store route")
})

route.put('/', (req:Request, res:Response)=>{
  res.send("Post update route")
})

route.delete('/', (req:Request, res:Response)=>{
  res.send("Post delete route")
})

export default route;