var express = require("express");
var router = express.Router();
var path = require("path");
var main = require("./main/main");
var email = require("./email/email");
var join = require("./join/index");

// router.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/main.html"));
// });

router.use("/api/main", main);
// router.use("/api/email", email);
// router.use("/api/join", join);

module.exports = router;
