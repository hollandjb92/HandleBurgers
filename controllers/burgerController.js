const express = require("express"),
  router = express.Router();

const burger = require("../models/burger");





router.get("/", (req, res) => {
  res.render("index");
})



module.exports = router;