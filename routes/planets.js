import { Router } from 'express'
const router = Router()
import * as planetsCtrl from '../controllers/planets.js'

router.get('/', planetsCtrl.index)
router.get('/:planetId', planetsCtrl.show)


export { router }