import mongoose from "mongoose"
const Schema = mongoose.Schema

const vehicleSchema = new Schema({


}, {
  timestamps: true
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

export {
  Vehicle
}