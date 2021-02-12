

class ProductController {
  addProduct = async (req, res, next) => {
    try {
      console.log("Into addProduct's method of controller")
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();