const express = require("express");
const router = express.Router();
const Style = require("../models/Style");
/**
 * Router is prefixed with "/styles"
 *
 */

// Get all

router.get("/", async (req, res, next) => {
  try {
    const styleDocuments = await Style.find();
    res.render("styles/styles.hbs", { styles: styleDocuments });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
