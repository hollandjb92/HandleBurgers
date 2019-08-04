const express = require("express"),
  exphbs = require("express-handlebars"),
  burgerRoutes = require("./controllers/burgerController");



const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.static("public"))


app.set("view engine", "handlebars");


app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.use("/", burgerRoutes);


app.listen(PORT, console.log(`Server running on PORT ${PORT}`))