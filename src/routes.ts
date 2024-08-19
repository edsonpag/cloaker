import { Router } from 'express'
import cors from 'cors'
import { ritualSecretoRevelado } from './controllers/cloakerController'

const router = Router()

router.post('/ritualsecretorevelado', cors({ origin: 'https://ritualsecretorevelado.online', optionsSuccessStatus: 200 }), ritualSecretoRevelado)

export default router