import { Router } from 'express'
import { getAllCloakerErrors, run } from './controllers/cloakerController'

const router = Router()

router.post('/', run)
router.get('/72de4316-d779-454a-8c24-1cd620c7683a', getAllCloakerErrors)

export default router