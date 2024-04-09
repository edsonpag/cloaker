import { Router } from 'express'
import { CloackerController } from './controllers/cloackerController';

const router = Router()

router.post('/buenaSalud', new CloackerController().buenaSalud)
router.post('/trucosNaturales', new CloackerController().trucosNaturales)
router.post('/viverBemComSaude', new CloackerController().viverBemComSaude)

export default router
