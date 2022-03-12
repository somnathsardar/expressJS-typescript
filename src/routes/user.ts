import { Request, Response, Router } from "express"
const route = Router()

route.get('/', (req:Request, res:Response)=>{
  res.send("User index route")
})

route.post('/', (req:Request, res:Response)=>{
  res.send("User store route")
})

route.put('/', (req:Request, res:Response)=>{
  res.send("User update route")
})

route.delete('/', (req:Request, res:Response)=>{
  res.send("User delete route")
})

export default route;