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

router.get("/all/", async (req, res, next) => {
  const titleFromQueryString = req.query.title;
  console.log(req.query);
  const query = {};

  if (titleFromQueryString) {
    const reg = new RegExp(titleFromQueryString);
    query.title = { $regex: reg, $options: "i" };
  }

  try {
    const albumDocuments = await Album.find(query)
      .populate("label")
      .populate("artist");

    res.render("albums/allAlbums.hbs", { albums: albumDocuments });
  } catch (error) {
    next(error);
  }
});

// Get one
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/page/:id here

router.get("/page/:id", async (req, res, next) => {
  try {
    const albumId = req.params.id;
    const albumDocument = await (await Album.findById(albumId)).populated(
      "label artist"
    );
    res.render("albums/one-album.hbs", { album: albumDocument });
  } catch (error) {
    next(error);
  }
});

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
router.get("/:id/edit", async (req, res) => {
  try {
    const artistDocuments = await Artist.find();
    const labelDocuments = await Label.find();
    const albumDocument = await Album.findById(req.params.id);
    console.log(albumDocument);
    // console.log(labelDocuments);
    res.render("albums/edit_form.hbs", {
      artists: artistDocuments,
      album: albumDocument,
      labels: labelDocuments,
    });
  } catch (error) {
    next(error);
  }
});

// Listen to the post of the edit form
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/edit here
router.post("/:id/edit", async (req, res, next) => {
  try {
    const albumId = req.params.id;
    const newAlbumValues = req.body;
    const updatedLabel = await Album.findByIdAndUpdate(albumId, newAlbumValues);
    res.redirect("/albums");
  } catch (error) {
    next(error); // Sends us to the error handler middleware in app.js if an error occurs
  }
});

// Listen to the delete
// // prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/delete here
router.get("/:id/delete", async (req, res, next) => {
  try {
    const albumId = req.params.id;
    await Album.findByIdAndDelete(albumId);
    res.redirect("/albums");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
