require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const productRouter = require("./modules/product/product.router");
const categoryRouter = require("./modules/category/category.router");

const {databaseConnect} = require("./utils/database");

const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
// routes
app.use("/categories", categoryRouter);
app.use("/products", productRouter);
// app.use("/days", dayRouter);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
databaseConnect();

// error middleware
app.use(errorMiddleware);

module.exports = app;