const Joi = require('joi');

const MusicPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = { MusicPayloadSchema };
