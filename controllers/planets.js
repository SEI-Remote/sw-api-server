import { Planet } from "../models/planet.js"
import { generateIndexResponse } from "../config/helpers.js"

async function index(req, res) {
  try {
    let currPage = req.query.page ? parseInt(req.query.page) : 1
    let responseObject = await generateIndexResponse(currPage, Planet, 'planets')
    if (responseObject.message) {
      throw new Error(responseObject.message)
    } 
    res.json(responseObject) 
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}

async function show(req, res) {
  try {
    let planet
    if (req.params.planetId.length <= 2 ) {
      planet = await Planet.findOne({url: `/api/planets/${req.params.planetId}/`})
    } else {
      planet = await Planet.findById(req.params.planetId)
    } 
    if (!planet) {
      return res.status(404).json({err: 'Resource not found'})
    }
    res.json(planet)
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}

export {
  index,
  show
}