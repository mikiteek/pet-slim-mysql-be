const Category = require("./category.model");

const isCategoryExistService = async (category) => {
  const isCategory = await Category.findOne({where: {name: category}});
  return isCategory;
}

module.exports = {
  isCategoryExistService,
}