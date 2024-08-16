import { Router } from 'express'
import { run } from './controllers/cloakerController'

const router = Router()

router.post('/', run)

export default router