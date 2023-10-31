const mongoose = require("mongoose");

mongoose
  .connect(process.env.DBURI)
  .then(() => console.log("connection success"))
  .catch((err) => console.log(err));

mongoose.connection.on("connect", () => console.log("Database connected"));
mongoose.connection.on("error", () => console.log("Unable to connect to db"));

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
