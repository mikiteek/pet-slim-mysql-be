const Joi = require("joi");

const validateAddProduct = (body) => {
  const schema = Joi.object({
    titleRu: Joi.string().required(),
    titleUa: Joi.string().required(),
    weight: Joi.number().greater(1),
    calories: Joi.number().greater(0),
  });
  const result = schema.validate(body);
  return result.error;
};

module.exports = {
  validateAddProduct,
}