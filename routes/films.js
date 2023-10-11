import { Router } from 'express'
const router = Router()
import * as filmsCtrl from '../controllers/films.js'

router.get('/', filmsCtrl.index)
router.get('/:filmId', filmsCtrl.show)


export { router }