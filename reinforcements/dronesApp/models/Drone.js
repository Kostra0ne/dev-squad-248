//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var DroneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const DroneModel = mongoose.model("Drone", DroneSchema);

module.exports = DroneModel;