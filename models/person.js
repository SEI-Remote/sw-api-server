import mongoose from "mongoose"
const Schema = mongoose.Schema

const personSchema = new Schema({


}, {
  timestamps: true
})

const Person = mongoose.model('Person', personSchema)

export {
  Person
}