import { Router } from 'express'
import { CloackerController } from './controllers/cloackerController';
import { CloackerControllerLegacy } from './controllers/cloakerControllerLegacy';

const router = Router()

router.post('/truqueSaudavel', new CloackerController().truqueSaudavel)
router.post('/legacy/viverBemComSaude', new CloackerControllerLegacy().viverBemComSaude)
router.post('/legacy/trucnaturel', new CloackerControllerLegacy().trucnaturel)

export default router
