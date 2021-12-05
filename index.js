const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

// Database Connection
mongoose
  .connect(process.env.MONOGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Backend server is running!");
});
