const {Router} = require("express");

const productRouter = Router();
const productController = require("./product.controller");

productRouter.post( // only for admin's role
  "/",
  productController.addProduct,
);

module.exports = productRouter;
