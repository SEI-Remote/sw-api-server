import { Router } from 'express'
const router = Router()
import * as peopleCtrl from '../controllers/people.js'

router.get('/', peopleCtrl.index)
router.get('/:personId', peopleCtrl.show)


export { router }