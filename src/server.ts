import express, { Express } from 'express'
import cors from 'cors'
import useragent from 'express-useragent'
import routes from './routes'

const app: Express = express()
const port = 8080

const allowedOrigins = ['https://buena-salud.online', 'https://trucosnaturales.online', 'https://viverbemcomsaude.online']
app.use(cors({
    origin: function (origin, callback) {
        if (origin && allowedOrigins.includes(origin))
          callback(null, true)
        else
          callback(new Error('Not allowed by CORS'))
      }
}))
app.use(express.json())
app.use(useragent.express())
app.use('/', routes)
app.listen(port)