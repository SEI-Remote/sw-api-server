import { Film } from "../models/film.js"
import { generateIndexResponse } from "../config/helpers.js"

async function index(req, res) {
  try {
    let currPage = req.query.page ? parseInt(req.query.page) : 1
    let responseObject = await generateIndexResponse(currPage, Film, 'films')
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
    let film
    if (req.params.filmId.length <= 2 ) {
      film = await Film.findOne({url: `/api/films/${req.params.filmId}/`})
    } else {
      film = await Film.findById(req.params.filmId)
    }
    if (!film) {
      return res.status(404).json({err: 'Resource not found'})
    }
    res.json(film)
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}

export {
  index,
  show
}