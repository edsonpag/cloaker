import { Router } from 'express'
import { ritualSecretoRevelado } from './controllers/cloakerController'

const router = Router()

router.post('/ritualsecretorevelado', ritualSecretoRevelado)

export default router