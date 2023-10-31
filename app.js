const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require("./helpers/mongodb.connection");

const airlineRouter = require("./routes/airline.route");
const flightRouter = require("./routes/flights.route");

//initialize server
const app = express();

//middleware
app.use(express.json());

//routers
app.use("/airline", airlineRouter);
app.use("/flight", flightRouter);

//error handling middleware
app.use(async (req, res, next) => {
  next(createError.NotFound("This route exists not"));
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});

//start server
app.listen(process.env.PORT, () => {
  console.log("App is listening at port 3000");
});

//middleware
app.use(morgan("dev"));
