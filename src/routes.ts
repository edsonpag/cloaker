import { Router } from 'express'
import { CloackerController } from './controllers/cloackerController';

const router = Router()

router.post('/ritualsecretorevelado', new CloackerController().ritualsecretorevelado)
router.post('/buenaSalud', new CloackerController().buenaSalud)

export default router
