const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const testimonialRoutes = require("./routes/testimonialRoutes");
require("dotenv").config();

const app = express();

app.use(async (req, res, next) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("CONNECTED TO DB SUCCESSFULLY");
    next();
  } catch (err) {
    next(err);
  }
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected!!"))
  .catch((e) => console.log("error in connecting!!", e));

app.use("/", testimonialRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
