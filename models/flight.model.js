const { Schema, default: mongoose } = require("mongoose");
const flightSchema = new Schema({
  id: Schema.ObjectId,
  date: String,
  from: String,
  to: String,
  airline: {
    type: Schema.Types.ObjectId,
    ref: "Airline",
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
