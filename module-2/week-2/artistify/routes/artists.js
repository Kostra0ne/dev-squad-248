const express = require("express");
const router = express.Router();
const Artist = require("../models/Artists");
const protectedAdminRoute = require("../middlewares/protectedAdminRoute");
// Get them all
//   /artists
router.get("/", protectedAdminRoute, async (req, res) => {
  try {
    const dbResult = await Artist.find();
    // const data = {artists: dbResult}
    // res.render("artists/artists", data); // same as below
    res.render("artists/artists", { artists: dbResult });
  } catch (error) {
    console.log(error);
  }
});

// Get one
// prefixed with /artists so /artists/:id
router.get("/page/:id", async (req, res, next) => {
  console.log(req.params.id);
  try {
    const artistId = req.params.id;
    const artistDocument = await Artist.findById(artistId);
    res.render("artists/one-artist.hbs", { artist: artistDocument });
  } catch (error) {
    next(error);
  }
});

// Get the create form
//prefixed with /artists in app.js so the route is  /artists/create

router.get("/create", protectedAdminRoute, (req, res) => {
  res.render("artists/form_create.hbs");
});

// Listen to the post of the create form
router.post("/create", protectedAdminRoute, async (req, res, next) => {
  try {
    const newArtist = req.body;
    // if(newArtist.isBand === "true"){
    //     newArtist.isBand = true;
    // }else newArtist.isBand = false; // same as below
    newArtist.isBand = newArtist.isBand === "true" ? true : false;
    const createdArtist = await Artist.create(newArtist);
    res.redirect("/artists");
  } catch (error) {
    next(error);
  }
});

// Display the edit form with the artists fields filled
router.get("/:id/edit", protectedAdminRoute, (req, res) => {});

// Listen to the post of the edit form
router.post("/:id/edit", protectedAdminRoute, (req, res) => {});

// Listen to the delete
router.get("/:id/delete", protectedAdminRoute, (req, res) => {});

module.exports = router;
