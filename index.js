const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const flights = require("./src/Routes/flights");
const test = require("./src/Routes/test");
const user = require("./src/Routes/users");

require("dotenv").config();

require("./src/db/connection");

const app = express();
let port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/aegis/v1", flights);
app.use("/aegis/v1", test);
app.use("/aegis/v1", user);

app.listen(port, () => {
  console.log("Server up and running", port);
});
