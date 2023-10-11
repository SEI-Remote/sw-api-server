import { Starship } from "../models/starship.js"
import { generateIndexResponse } from "../config/helpers.js"

async function index(req, res) {
  try {
    let currPage = req.query.page ? parseInt(req.query.page) : 1
    let responseObject = await generateIndexResponse(currPage, Starship, 'starships')
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
    let starship
    if (req.params.starshipId.length <= 2 ) {
      starship = await Starship.findOne({url: `/api/starships/${req.params.starshipId}/`})
    } else {
      starship = await Starship.findById(req.params.starshipId)
    }   
    if (!starship) {
      return res.status(404).json({err: 'Resource not found'})
    }
    res.json(starship)
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}

export {
  index,
  show
}