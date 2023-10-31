const Airline = require("../models/airline.model");
const HttpErrors = require("http-errors");
const {
  airlineValidationSchema,
} = require("../helpers/validation-schemas/airline.validation.schema");

module.exports = {
  async createAirline(req, res) {
    try {
      const { name } = await airlineValidationSchema.validateAsync(req.body);
      const airline = new Airline({ name });
      airline
        .save()
        .then(({ _id, name }) => {
          res.json({
            success: true,
            airline: {
              id: _id,
              name,
            },
          });
        })
        .catch((err) => {
          throw HttpErrors.InternalServerError(err.message);
        });
    } catch (error) {
      res.send({
        success: false,
        error: error.message,
      });
    }
  },
  async getAirlines(req, res) {
    try {
      let airlines = await Airline.find();
      let formatedAirlines = [];
      airlines.forEach(({ _id, name }) => {
        formatedAirlines.push({ id: _id, name });
      });
      res.json({
        success: true,
        airlines: formatedAirlines,
      });
    } catch (error) {
      res.json({
        success: false,
        error: error,
      });
    }
  },
};
