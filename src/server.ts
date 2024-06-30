import express, { Express } from 'express'
import cors from 'cors'
import useragent from 'express-useragent'
import routes from './routes'

const app: Express = express()
const port = 8080

app.use(cors({
    origin: ['https://truquesaudavel.online', 'https://truquenaturalsaudavel.online', 'https://trucosnaturales.online', 'https://buena-salud.online', 'http://app.trucnaturel.site']
}))
app.use(express.json())
app.use(useragent.express())
app.use('/', routes)
app.listen(port)