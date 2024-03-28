import { Router } from 'express'
import { CloackerController } from './cloackerController';

const router = Router()

router.post('/', new CloackerController().main);

export default router
