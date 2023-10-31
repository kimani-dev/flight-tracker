const {
  flightValidationSchema,
} = require("../helpers/validation-schemas/flight.validation.schema");
const Flight = require("../models/flight.model");
const createError = require("http-errors");

module.exports = {
  async createFlight(req, res, next) {
    try {
      const flightFromRequest = await flightValidationSchema.validateAsync(
        req.body
      );
      const flight = new Flight(flightFromRequest);
      flight
        .save()
        .then(({ _id, from, to, airline, date }) => {
          res.json({
            success: true,
            flight: {
              id: _id,
              date,
              from,
              to,
              airline: {
                id: airline._id,
                name: airline.name,
              },
            },
          });
        })
        .catch((err) => {
          throw createError.InternalServerError(err.message);
        });
    } catch (error) {
      next(error);
    }
  },
  async getFlights(req, res, next) {
    try {
      const flights = await Flight.find().populate("airline").exec();
      const formatedFlights = [];
      flights.forEach(({ _id, date, from, to, airline }) => {
        formatedFlights.push({
          id: _id,
          date,
          from,
          to,
          airline: {
            id: airline._id,
            name: airline.name,
          },
        });
      });
      res.json({
        success: true,
        flights: formatedFlights,
      });
    } catch (error) {
      next(error);
    }
  },
};
