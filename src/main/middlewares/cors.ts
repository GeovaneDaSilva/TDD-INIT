import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('eccess-control-allow-origin', '*')
  res.set('eccess-control-allow-headers', '*')
  res.set('eccess-control-allow-methods', '*')

  next()
}
