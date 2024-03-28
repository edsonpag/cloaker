import { Router } from 'express'
import { CloackerController } from './controllers/cloackerController';

const router = Router()

router.post('/', new CloackerController().main);

export default router
