const express = require("express");
const router = new express.Router();
const UserModel = require("./../models/User"); // go one level up and fetch User.js file in models folder

router.get("/", (req, res) => {
  res.render("home", {
    images: ["1.jpg", "2.jpg", "3.gif"], // hardcoded data ... be patient ^^
    css: ["mod.image-gallery"],
  });
});

// with async/await
router.get("/my-dev-squad", async (req, res, next) => {
  try {
    res.render("userAll", {
      users: await UserModel.find(),
      css: ["mod.list-grid"],
    });
  } catch (err) {
    next(err); // the provided next function will handle the error for you
  }
});

// with then/catch
// router.get("/my-dev-squad", (req, res, next) => {
//   UserModel.find()
//     .then((dbRes) =>
//       res.render("userAll", { users: dbRes, css: ["mod.list-grid"] })
//     )
//     .catch(next); //  next function will handle the error for you
// });

router.get("/add-new-ironhacker", (req, res) => {
  res.render("userCreate", { css: ["mod.form"] });
});

router.get("/delete-ironhacker/:id", async (req, res, next) => {
  try {
    await UserModel.findByIdAndRemove(req.params.id);
    res.redirect("/my-dev-squad");
  } catch (err) {
    next(err);
  }
});

router.post("/ironhacker", async (req, res, next) => {
  // console.log(req.body);
  // req.body is exposing the posted data
  // (don't forget to configure it on app.js)
  try {
    await UserModel.create(req.body);
    res.redirect("/my-dev-squad");
  } catch (databaseError) {
    next(databaseError);
  }
});

module.exports = router;
