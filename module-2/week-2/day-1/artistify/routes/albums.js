const express = require("express");
const router = express.Router();
const Album = require("../models/Albums");
const Artist = require("../models/Artists");
const Label = require("../models/Label");

// Get them all
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so "/albums" here
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
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/page/:id here
router.get("/page/:id", (req, res) => {});

// Get the create form
// prefixed with /albums in app.js (app.use("/albums", albumsRouter))  /albums/create
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
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/create here
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
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/edit here
router.get("/:id/edit", (req, res) => {});

// Listen to the post of the edit form
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/edit here
router.post("/:id/edit", (req, res) => {});

// Listen to the delete
// // prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/delete here
router.get("/:id/delete", (req, res) => {});

module.exports = router;
