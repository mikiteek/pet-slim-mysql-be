const {Sequelize} = require("sequelize");
const {DB_HOST, DB_NAME, DB_USER, DB_PASS} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  logging: console.log,
});

const databaseConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = {
  sequelize,
  databaseConnect,
};