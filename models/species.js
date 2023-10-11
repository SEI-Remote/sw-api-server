import mongoose from "mongoose"
const Schema = mongoose.Schema

const speciesSchema = new Schema({


}, {
  timestamps: true
})

const Species = mongoose.model('Species', speciesSchema)

export {
  Species
}