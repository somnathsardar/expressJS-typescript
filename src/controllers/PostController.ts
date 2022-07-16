import { Request, Response } from "express"

export class PostController {
  public index(req: Request, res: Response) {
    res.send("Post index route")
  }

  public store(req: Request, res: Response) {
    res.send("Post store route")
  }

  public update(req: Request, res: Response) {
    res.send("Post update route")
  }

  public destroy(req: Request, res: Response) {
    res.send("Post delete route")
  }
}