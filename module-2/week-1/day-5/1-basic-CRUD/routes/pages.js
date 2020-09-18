const express = require("express");
const router = new express.Router();
const UserModel = require("./../models/User"); // go one level up and fetch User.js file in models folder


// YAY : WE GOT A CRUD ROUTER :D Congratz !!!

// homepage
router.get("/", (req, res) => {
  res.render("home", {
    images: ["1.jpg", "2.jpg", "3.gif"], // hardcoded data ... be patient ^^
    css: ["mod.image-gallery"],
  });
});

// perform the db operation : fetch all hackers and display them on the view
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

// perform the db operation : fetch one one hacker by mongo_object_id and dispkay it on the view
router.get("/my-dev-squad/profile/:id", (req, res, next) => {
  UserModel.findById(req.params.id)
    .then((user) => {
      res.render("userDetails", { user, css: ["mod.form"] });
    })
    .catch(next);
});

// display the form to create on new hacker
router.get("/add-new-ironhacker", (req, res) => {
  res.render("userCreate", { css: ["mod.form"] });
});

// perform the db operation : remove one hacker by mongo_object_id
router.get("/ironhacker/:id/delete", async (req, res, next) => {
  try {
    await UserModel.findByIdAndRemove(req.params.id);
    res.redirect("/my-dev-squad");
  } catch (err) {
    next(err);
  }
});

// perform the db operation : insert a document in users collection
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

// perform the db operation : update one document in users collection: 
// using the provided mongo_object_id (req.params) and the posted data (req.body)
router.post("/ironhacker/:id/update", async (req, res, next) => {
  try {
    await UserModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/my-dev-squad/profile/" + req.params.id);
  } catch (err) {
    next(err);
  }
});

module.exports = router;




// ALTERNATIVES

// GET /my-dev-squad/profile/:id with async/await pattern
// router.get("/my-dev-squad/profile/:id", async (req, res, next) => {
//   try {
//     const user = await UserModel.findById(req.params.id)
//     res.render("userDetails", { user, css: ["mod.form"] });
//   } catch(dbErr) {
//     next(dbErr);
//   }
// })

// GET /my-dev-squad with then/catch parttern
// router.get("/my-dev-squad", (req, res, next) => {
//   UserModel.find()
//     .then((dbRes) =>
//       res.render("userAll", { users: dbRes, css: ["mod.list-grid"] })
//     )
//     .catch(next); //  next function will handle the error for you
// });
