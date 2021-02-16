const app = require("./src/server");
const {databaseConnect} = require("./src/utils/database");
const PORT = process.env.PORT || 4000;

databaseConnect();

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});