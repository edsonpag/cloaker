import express, { Express } from 'express'
import 'dotenv/config'
import cors from 'cors'
import useragent from 'express-useragent'
import routes from './routes'

const app: Express = express()
const port = 8080

app.use(cors())
app.use(express.json())
app.use(useragent.express())
app.use('/', routes)
app.listen(port)