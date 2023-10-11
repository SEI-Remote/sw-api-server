import { Vehicle } from "../models/vehicle.js"
import { generateIndexResponse } from "../config/helpers.js"


async function index(req, res) {
  try {
    let currPage = req.query.page ? parseInt(req.query.page) : 1
    let responseObject = await generateIndexResponse(currPage, Vehicle, 'vehicles')
    if (responseObject.message) {
      throw new Error(responseObject.message)
    } 
    res.json(responseObject) 
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}

async function show(req, res) {

}

export {
  index,
  show
}