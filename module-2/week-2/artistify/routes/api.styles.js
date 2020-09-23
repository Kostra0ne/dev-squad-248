const express = require("express");
const router = express.Router();
const Style = require("../models/Style");

router.post("/create", async (req, res, next) => {
  try {
    const newStyle = req.body;
    const styleDocument = await Style.create(newStyle);
    res.json(styleDocument);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedStyle = await Style.findByIdAndDelete(req.params.id);
    res.json({ message: "Success" });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updateValues = req.body;
    const id = req.params.id;
    const updatedStyle = await Style.findByIdAndUpdate(id, updateValues, {
      new: true,
    });

    res.json(updatedStyle);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
