const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../../utils/database");

class ProductCategory extends Model {}

ProductCategory.init({
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: {
        tableName: "Categories",
      },
      key: "id",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: {
        tableName: "Products",
      },
      key: "id",
    },
  },
},
  {
    sequelize,
    timestamps: false,
  }
);

ProductCategory.sync()
  .then(() => console.log("ProductCategory sync has been success"))
  .catch(error => console.log(error.message));

module.exports = ProductCategory;