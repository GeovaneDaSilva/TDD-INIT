import express from 'express'
import { config as dotenv } from 'dotenv'
import routes from './routes'
import middlewares from './middlewares'

const app = express()
middlewares(app)
// ROUTES INIT
routes(app)
dotenv()
export default app
