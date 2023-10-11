import mongoose from "mongoose"
const Schema = mongoose.Schema

const vehicleSchema = new Schema({
  name: String,
  model: String,
  manufacturer: String,
  cost_in_credits: String,
  length: String,
  max_atmosphering_speed: String,
  crew: Number,
  passengers: String,
  cargo_capacity: String,
  consumables: String,
  vehicle_class: String,
  pilots: [String],
  films: [String],
  url: String

}, {
  timestamps: true
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

export {
  Vehicle
}