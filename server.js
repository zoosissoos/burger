const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./controllers/burgers_controller.js');

//calls express function as well as sets port
const app = express();
let port = process.env.PORT || 3000;

//overides the methods to allow "PUTS"
app.use(methodOverride('_method'));

//sets handlebars as the view engine in express
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//body parser and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//sets static folder
app.use(express.static("public"));

//identifies routes for server
app.use(routes);

//sets up listener
app.listen(port, function(){
  console.log(`Listening on ${port}`);
});

