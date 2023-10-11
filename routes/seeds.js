import { Router } from 'express'
const router = Router()
import * as seedsCtrl from '../controllers/seeds.js'

// Used to seed data
// router.get('/films', seedsCtrl.seedFilms)
// router.get('/people', seedsCtrl.seedPeople)
// router.get('/planets', seedsCtrl.seedPlanets)
// router.get('/species', seedsCtrl.seedSpecies)
// router.get('/starships', seedsCtrl.seedStarships)
// router.get('/vehicles', seedsCtrl.seedVehicles)

export { router }