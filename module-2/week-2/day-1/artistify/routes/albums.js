const express = require("express");
const router = express.Router();
const Album = require("../models/Albums");
const Artist = require("../models/Artists");
const Label = require("../models/Label");

// Get them all
//   /albums/albums
router.get("/", async (req, res, next) => {
  try {
    // const albumDocuments = await Album.find().populate("label artist"); // same as below
    const albumDocuments = await Album.find()
      .populate("label")
      .populate("artist");
    res.render("albums/albums.hbs", { albums: albumDocuments });
  } catch (error) {
    next(error);
  }
});

// Get one
// prefixed with /albums so /albums/:id

router.get("/page/:id", (req, res) => {});

// Get the create form
//prefixed with /albums in app.js so the route is  /albums/create
router.get("/create", async (req, res, next) => {
  try {
    const artistDocuments = await Artist.find();
    const labelDocuments = await Label.find();
    res.render("albums/create_form.hbs", {
      artists: artistDocuments,
      labels: labelDocuments,
    });
  } catch (error) {
    next(error);
  }
});

// Listen to the post of the create form
router.post("/create", async (req, res, next) => {
  //   console.log(req.body);
  try {
    const newAlbum = req.body;
    const createdAlbum = await Album.create(newAlbum);
    res.redirect("/albums");
  } catch (error) {
    next(error);
  }
});

// Display the edit form with the albums fields filled
router.get("/:id/edit", (req, res) => {});

// Listen to the post of the edit form
router.post("/:id/edit", (req, res) => {});

// Listen to the delete
router.get("/:id/delete", (req, res) => {});

module.exports = router;
