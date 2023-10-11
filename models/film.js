import mongoose from "mongoose"
const Schema = mongoose.Schema

const filmSchema = new Schema({
  title: String,
  episode_id: Number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  characters: [String],
  planets: [String],
  starships: [String],
  vehicles: [String],
  species: [String],
  url: String
}, {
  timestamps: true
})

const Film = mongoose.model('Film', filmSchema)

export {
  Film
}