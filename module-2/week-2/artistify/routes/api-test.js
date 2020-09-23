const express = require("express");
const router = express.Router();
const Artist = require("../models/Artists");

router.get("/postman-test", (req, res, next) => {
  res.send("This is the way");
});

router.get("/get-the-artists", async (req, res, next) => {
  try {
    const artistDocuments = await Artist.find();
    res.json(artistDocuments);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
