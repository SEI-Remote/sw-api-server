import { Person } from "../models/person.js"
import { generateIndexResponse } from "../config/helpers.js"

async function index(req, res) {
  try {
    let currPage = req.query.page ? parseInt(req.query.page) : 1
    let responseObject = await generateIndexResponse(currPage, Person, 'people')
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
    let person
    if (req.params.personId.length <= 2 ) {
      person = await Person.findOne({url: `/api/people/${req.params.personId}/`})
    } else {
      person = await Person.findById(req.params.personId)
    }    
    if (!person) {
      return res.status(404).json({err: 'Resource not found'})
    }
    res.json(person)
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}

export {
  index,
  show
}