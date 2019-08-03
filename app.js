const express = require("express"),
  exphbs = require("express-handlebars"),
  path = require("path");



const app = express();



app.set("view engine", "handlebars");


app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);