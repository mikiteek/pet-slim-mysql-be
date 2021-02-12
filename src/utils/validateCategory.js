const Joi = require("joi");

const validateAddProductCategory = (body) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const result = schema.validate(body);
  return result.error;
};

module.exports = {
  validateAddProductCategory,
}