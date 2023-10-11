import { Router } from 'express'
const router = Router()
import * as starshipsCtrl from '../controllers/starships.js'

router.get('/', starshipsCtrl.index)
router.get('/:starshipId', starshipsCtrl.show)


export { router }