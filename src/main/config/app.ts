import express from 'express'
import { config as dotenv } from 'dotenv'
import routes from './routes'

const app = express()
// ROUTES INIT
routes(app)
dotenv()
export default app
