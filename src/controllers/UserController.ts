import { Request, Response } from "express"

export class UserController {
  public index(req: Request, res: Response) {
    res.send("User index route")
  }

  public store(req: Request, res: Response) {
    res.send("User store route")
  }

  public update(req: Request, res: Response) {
    res.send("User update route")
  }

  public destroy(req: Request, res: Response) {
    res.send("User delete route")
  }
}