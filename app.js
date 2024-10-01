// import external modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// import internal modules
const connectMongodb = require("./init/mongodb");
const todoRoute = require("./routes/todo");

// Environment  variable
dotenv.config()
// ====== init app ==========
const app = express();

// ==== mongodb connection =======
connectMongodb();

//====== view engine ========
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRoute); // use the routes

module.exports = app;
