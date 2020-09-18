const express = require("express");
const router = new express.Router();
const CatModel = require("./../models/Cat");

// CRUD ???? + MVC ????
// define model
// then in new router =>
// start with create (insert in db)
// the read all (read all from db's collection)
// then delete one (remove from db)
// then read one (read one from db's collection)
// then update one (update one from db's collection)

router.get("/add-new-cat", (req, res) => {
  res.render("catForm", { css: ["mod.form"] });
});

router.get("/cat/:id/delete", async (req, res, next) => {
  try {
    await CatModel.findByIdAndRemove(req.params.id);
    res.redirect("/display-all-cats");
  } catch (dbErr) {
    next(dbErr);
  }
});

router.get("/display-all-cats", async (req, res) => {
  const cats = await CatModel.find();
  res.render("catAll", { cats, css: [] });
});

router.get("/cat-details/:id", (req, res, next) => {
  CatModel.findById(req.params.id)
    .then((dbRes) => {
      res.render("catDetails", { cat: dbRes });
    })
    .catch(next);
  // .catch(function(err) {
  //   next(err)
  // })
  // .catch(err => next(err))
});

router.post("/cat", (req, res, next) => {
  CatModel.create(req.body)
    .then((dbRes) => {
      res.redirect("/add-new-cat");
    })
    .catch((dbErr) => {
      next(err);
    });
});

module.exports = router;
