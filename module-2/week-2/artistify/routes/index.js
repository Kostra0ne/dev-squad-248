var express = require("express");
var router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/profile", requireAuth, function (req, res, next) {
  res.render("profile.hbs");
});

module.exports = router;
