const express = require("express");
const router = new express.Router();
const ironhackers = require("./data").ironhackers;
// "Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”."

// check the doc  @ https://expressjs.com/en/guide/routing.html

// router is mini app, within the app (a sub-application)
// any router get the same API as the main app

router.get("/", (req, res) => {
  res.render("home", { ironhackers });
});

router.get("/about", (req, res) => {
  res.render("about", {
    css: ["page.about"],
  });
});

router.get("/blog", (req, res) => {
  res.render("blog");
});

// router.get("/test", (req, res) => {
//   res.sendFile(process.cwd() + "/views/classic.html");
// });

module.exports = router;
