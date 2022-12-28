const Joi = require("joi");
// const { objectId } = require('./custom.validation');

const createTrial = {
  body: Joi.object({
    trial: Joi.string().required().min(4),
  }),
};

const updateTrial = {
  body: Joi.object({}),
};

module.exports = { createTrial, updateTrial };
