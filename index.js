const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Database Connection
mongoose
  .connect(process.env.MONOGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Backend server is running!");
});
