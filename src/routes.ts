import { Router } from 'express'
import { CloackerController } from './controllers/cloackerController';
import { CloackerControllerLegacy } from './controllers/cloakerControllerLegacy';

const router = Router()

router.post('/truqueSaudavel', new CloackerController().truqueSaudavel)
router.post('/legacy/truqueNaturalSaudavel', new CloackerControllerLegacy().truqueNaturalSaudavel)
router.post('/legacy/trucosNaturales', new CloackerControllerLegacy().trucosNaturales)
router.post('/legacy/viverBemComSaude', new CloackerControllerLegacy().trucosNaturales)

export default router
