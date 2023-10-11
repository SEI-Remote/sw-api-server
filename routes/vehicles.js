import { Router } from 'express'
const router = Router()
import * as vehiclesCtrl from '../controllers/vehicles.js'

router.get('/', vehiclesCtrl.index)
router.get('/:vehicleId', vehiclesCtrl.show)


export { router }