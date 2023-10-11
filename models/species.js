import mongoose from "mongoose"
const Schema = mongoose.Schema

const speciesSchema = new Schema({
  "name": String,
  "classification": String,
  "designation": String,
  "average_height": String,
  "skin_colors": [String],
  "hair_colors": [String],
  "eye_colors": [String],
  "average_lifespan": String,
  "homeworld": String,
  "language": String,
  "people": [String],
  "films": [String],
  "url": String

}, {
  timestamps: true
})

const Species = mongoose.model('Species', speciesSchema)

export {
  Species
}