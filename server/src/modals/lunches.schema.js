const mongoose = require("mongoose");

const lunchesScheme = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  launchDate: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
  },
  customer: {
    type: [String],
  },
  upcomming: {
    type: Boolean,
    default: true,
  },
  success: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("launch", lunchesScheme);
