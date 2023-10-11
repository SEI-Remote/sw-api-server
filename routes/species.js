import { Router } from 'express'
const router = Router()
import * as speciesCtrl from '../controllers/species.js'

router.get('/', speciesCtrl.index)
router.get('/:speciesId', speciesCtrl.show)


export { router }