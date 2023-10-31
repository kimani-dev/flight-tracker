const Joi = require("joi");

const flightValidationSchema = Joi.object({
  date: Joi.string().required(),
  to: Joi.string().required(),
  from: Joi.string().required(),
  airline: Joi.string().required(),
});

module.exports = {
  flightValidationSchema,
};
