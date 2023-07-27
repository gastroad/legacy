var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");

var router = require("./router/index");

app.listen(3000, () => {
  console.log("start");
});
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(router);
