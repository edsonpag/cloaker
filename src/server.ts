import express, { Express } from 'express'
import cors from 'cors'
import 'dotenv/config'
import useragent from 'express-useragent'
import routes from './routes'

const app: Express = express()
const port = 8080

app.use(cors())
app.use(express.json())
app.use(useragent.express())
app.use('/', routes)
app.listen(port)