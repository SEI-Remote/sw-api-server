import mongoose from "mongoose"
const Schema = mongoose.Schema

const personSchema = new Schema({
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: String,
  films: [String],
  species: [String],
  vehicles: [String],
  starships: [String],
  url: String
}, {
  timestamps: true
})

const Person = mongoose.model('Person', personSchema)

export {
  Person
}