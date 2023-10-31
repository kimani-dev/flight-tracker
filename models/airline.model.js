const { Schema, default: mongoose } = require("mongoose");

const airlineSchema = new Schema(
  {
    id: Schema.ObjectId,
    name: String,
    flights: [{ type: Schema.ObjectId, ref: "Flight" }],
  },
  { timestamps: true }
);

const Flight = mongoose.model("Airline", airlineSchema);

module.exports = Flight;
