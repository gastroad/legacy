var express = require("express");
var router = express.Router();
var path = require("path");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "jsman"
});

connection.connect();

// router.get("/", function(req, res) {
//   res.json("hello");
// });
router.get("/", (req, res) => {
  var responseData = {};

  var query = connection.query(`select * from scrum`, (err, rows) => {
    if (err) throw err;
    if (rows) {
      responseData = rows;
    } else {
      responseData.result = "none";
      responseData.name = "";
    }
    res.json(responseData);
  });
});
router.post("/", (req, res) => {
  var responseData = {};
  var body = req.body;
  var member = body.member;
  var time = body.time;
  var query = connection.query(
    `INSERT INTO jsman.scrum (${member[0]},${member[1]},${member[2]},${
      member[3]
    },${member[4]},${member[5]}) VALUES ('${time[0]}', '${time[1]}', '${
      time[2]
    }', '${time[3]}', '${time[4]}', '${time[5]}');`,
    function(err, rows) {
      if (err) throw err;
      responseData.result = "ok";
      res.json(responseData);
    }
  );
});
module.exports = router;
