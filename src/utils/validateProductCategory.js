const Joi = require("joi");

const validateAddProductCategory = (body) => {
  const schema = Joi.object({
    categoryId: Joi.number().required(),
    productId: Joi.number().required(),
  });
  const result = schema.validate(body);
  return result.error;
};

module.exports = {
  validateAddProductCategory,
}