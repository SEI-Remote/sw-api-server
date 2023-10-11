import mongoose from "mongoose"
const Schema = mongoose.Schema

const planetSchema = new Schema({


}, {
  timestamps: true
})

const Planet = mongoose.model('Planet', planetSchema)

export {
  Planet
}