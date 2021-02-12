const Category = require("../category/category.model");
const {
  isCategoryExistService,
} = require("./category.service");
const {
  validateAddProductCategory,
} = require("../../utils/validateCategory");
const {
  BadRequestError,
  FailedToPost,
} = require("../error/errors");

class CategoryController {
  addProductCategory = async (req, res, next) => {
    try {
      const {body, body: {name}} = req;
      const error = validateAddProductCategory(body);
      if (error) {
        return res.status(400).json(BadRequestError);
      }
      const isCategoryExist = await isCategoryExistService(name);
      if (isCategoryExist) {
        return res.status(409).json({message: "Such category already exist"});
      }

      const category = await Category.create(body);
      return res.status(201).json(category);
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new CategoryController();