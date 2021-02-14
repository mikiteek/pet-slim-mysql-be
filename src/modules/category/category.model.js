const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../../utils/database");

class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING,
    unique: true,
  }
},
  {
    sequelize,
    timestamps: false,
    indexes: [{
      unique: true,
      fields: ["name"]
    }],
  },
);

Category.sync()
  .then(() => console.log("Category sync has been success"))
  .catch(error => console.log(error.message));

module.exports = Category;