require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
// routes
// app.use("/users", userRouter);
// app.use("/products", productRouter);
// app.use("/days", dayRouter);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// database
// databaseConnect();
// error middleware
// app.use(errorMiddleware);

module.exports = app;