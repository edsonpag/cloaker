import { Router } from 'express'
import { CloackerController } from './cloackerController';

const router = Router()

router.get('/', new CloackerController().main);

export default router
