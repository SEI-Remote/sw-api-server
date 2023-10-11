import mongoose from "mongoose"
const Schema = mongoose.Schema

const planetSchema = new Schema({
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  population: String,
  residents: [String],
  films: [String],
  url: String

}, {
  timestamps: true
})

const Planet = mongoose.model('Planet', planetSchema)

export {
  Planet
}