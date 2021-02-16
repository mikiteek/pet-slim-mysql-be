const Joi = require("joi");

const validateAddNotAllowedProduct = (body) => {
  const schema = Joi.object({
    groupBlood: Joi.number().integer().valid(1, 2, 3, 4).required(),
    productId: Joi.number().required(),
  });
  const result = schema.validate(body);
  return result.error;
};

module.exports = {
  validateAddNotAllowedProduct,
}