import mongoose from "mongoose"
const Schema = mongoose.Schema

const filmSchema = new Schema({


}, {
  timestamps: true
})

const Film = mongoose.model('Film', filmSchema)

export {
  Film
}