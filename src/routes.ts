import { Router } from 'express'
import { CloackerController } from './controllers/cloackerController';
import { CloackerControllerLegacy } from './controllers/cloakerControllerLegacy';

const router = Router()

router.post('/truqueSaudavel', new CloackerController().truqueSaudavel)
router.post('/legacy/viverBemComSaude', new CloackerControllerLegacy().viverBemComSaude)

export default router
