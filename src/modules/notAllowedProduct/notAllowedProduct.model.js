const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../../utils/database");

class NotAllowedProduct extends Model {}

NotAllowedProduct.init({
  groupBlood: DataTypes.INTEGER,
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
    indexes: [{
      fields: ["groupBlood"],
    }],
  }
);

NotAllowedProduct.sync()
  .then(() => console.log("NotAllowedProduct sync has been success"))
  .catch(error => console.log(error.message));

module.exports = NotAllowedProduct;