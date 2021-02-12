const {Router} = require("express");

const categoryRouter = Router();
const categoryController = require("./category.controller");

categoryRouter.post( // only for admin's role
  "/",
  categoryController.addProductCategory,
);

module.exports = categoryRouter;