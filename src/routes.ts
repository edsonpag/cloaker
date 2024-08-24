import { Router } from 'express'
import { CloackerController } from './controllers/cloackerController';

const router = Router()

router.post('/ritualsecretorevelado', new CloackerController().ritualsecretorevelado)

export default router
