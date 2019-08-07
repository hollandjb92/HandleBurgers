const express = require("express"),
  router = express.Router();

const burger = require("../models/burger");





router.get("/", (req, res) => {
  burger.selectAll(burgers => {
    res.render("index", {
      burgers
    })
  })
})



router.post("/api/burgers", (req, res) => {
  // console.log(req.body.devoured);
  burger.insertOne(["burgerName", "devoured"], [req.body.burgerName, req.body.devoured], (response) => {
    res.json({
      id: response.insertId
    });
  })
})

router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, response => {
    if (response.changedRows == 0) return res.status(404).end();

    res.status(200).end();
  })
})

router.delete("/api/burgers/:id", (req, res) => {

  const condition = "id = " + req.params.id;

  burger.deleteOne(condition, response => {
    if (response.changedRows == 0) return res.status(404).end();

    res.status(200).end();
  })

})


module.exports = router;