const Joi = require("joi");

const airlineValidationSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  airlineValidationSchema,
};
