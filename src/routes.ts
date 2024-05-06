import { Router } from 'express'
import { CloackerController } from './controllers/cloackerController';

const router = Router()

router.post('/truqueSaudavel', new CloackerController().truqueSaudavel)

export default router
