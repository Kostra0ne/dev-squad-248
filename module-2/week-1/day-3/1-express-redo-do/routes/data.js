const express = require("express");
const router = new express.Router();

// this is the starting point of your custom "rest" API
// we'll begin with a easy setup :)

const ironhackers = [
  { name: "bill", favLang: "JS" }, // 0
  { name: "jill", favLang: "Python" }, // 1
  { name: "will", favLang: "JS" }, // 2
  { name: "joe", favLang: "Java" }, // 3
];

router.get("/ironhackers", (req, res) => {
  res.json(ironhackers);
});

// here we use dynamic url's segment /foo/bar/baz
router.get("/ironhackers/:index", (req, res) => {
  const currentIndex = req.params.index; // access the :index parameter's value
  if (currentIndex <= 0 || currentIndex >= ironhackers.length)
    res.json("out of bounds");
  res.json(ironhackers[currentIndex - 1]);
});

module.exports = {
  router,
  ironhackers
};
