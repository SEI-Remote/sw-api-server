import { Species } from "../models/species.js"
import { generateIndexResponse } from "../config/helpers.js"

async function index(req, res) {
  try {
    let currPage = req.query.page ? parseInt(req.query.page) : 1
    let responseObject = await generateIndexResponse(currPage, Species, 'species')
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
    let species
    if (req.params.speciesId.length <= 2 ) {
      species = await Species.findOne({url: `/api/species/${req.params.speciesId}/`})
    } else {
      species = await Species.findById(req.params.speciesId)
    }    
    if (!species) {
      return res.status(404).json({err: 'Resource not found'})
    }
    res.json(species)
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}

export {
  index,
  show
}