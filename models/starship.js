import mongoose from "mongoose"
const Schema = mongoose.Schema

const starshipSchema = new Schema({


}, {
  timestamps: true
})

const Starship = mongoose.model('Starship', starshipSchema)

export {
  Starship
}