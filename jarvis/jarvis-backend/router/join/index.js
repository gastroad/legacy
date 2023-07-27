var express = require("express");
var mysql = require("mysql");
var path = require("path");

var router = express.Router();
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "jsman"
});
connection.connect();

router.get("/", (req, res) => {
  const hello = {
    hello: "hello;"
  };
  // res.sendFile(path.join(__dirname, "../../public/join.html"));
  res.json(hello);
});

router.post("/", (req, res) => {
  var body = req.body;
  var email = body.email;
  var name = body.name;
  var passwd = body.password;
  var responseData = {};
  var query = connection.query(
    `insert into user (email,name,pw) values ("${email}","${name}","${passwd}");`,
    function(err, rows) {
      if (err) throw err;
      responseData.result = "ok";
      responseData = "?";
      res.json(responseData);
    }
  );
});

module.exports = router;
