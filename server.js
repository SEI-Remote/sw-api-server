import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import './config/database.js'

import { router as filmsRouter } from './routes/films.js'
import { router as peopleRouter } from './routes/people.js'
import { router as planetsRouter } from './routes/planets.js'
import { router as speciesRouter } from './routes/species.js'
import { router as starshipsRouter } from './routes/starships.js'
import { router as vehiclesRouter } from './routes/vehicles.js'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/films', filmsRouter)
app.use('/api/people', peopleRouter)
app.use('/api/planets', planetsRouter)
app.use('/api/species', speciesRouter)
app.use('/api/starships', starshipsRouter)
app.use('/api/vehicles', vehiclesRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
