const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../../utils/database");

const ProductCategory = require("../productCategory/productCategory.model");
const NotAllowedProduct = require("../notAllowedProduct/notAllowedProduct.model");

class Product extends Model {}

Product.init({
  titleRu: DataTypes.STRING,
  titleUa: DataTypes.STRING,
  weight: DataTypes.NUMBER,
  calories: DataTypes.NUMBER,
},
  {
    sequelize,
    timestamps: false,
    indexes: [{
      fields: ["titleRu", "titleUa"],
    }],
  },
);

Product.sync()
  .then(() => console.log("Product sync has been success"))
  .catch(error => console.log(error.message));

Product.hasMany(ProductCategory, {as: "categories", foreignKey: "productId"});
Product.hasMany(NotAllowedProduct, {as: "notAllowedProducts", foreignKey: "productId"});

module.exports = Product;