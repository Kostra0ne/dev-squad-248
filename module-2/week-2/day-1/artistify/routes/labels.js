const express = require("express");
const router = express.Router();
const Label = require("../models/Label");
const uploader = require("../config/cloudinary");

router.get("/labels", (req, res, next) => {
  //   console.log(req.body, "this is body");
  //   console.log(req.params, "this is req params-----");

  Label.find({})
    .then((dbResult) => {
      res.render("labels.hbs", { labels: dbResult });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/labels/:id/delete", (req, res, next) => {
  const labelId = req.params.id;
  Label.findByIdAndDelete(labelId)
    .then((dbResult) => {
      res.redirect("/labels");
    })
    .catch((error) => {
      //   console.log(error);
      next(error);
    });
});

router.get("/labels/create", (req, res, next) => {
  res.render("create_form_labels.hbs");
});

router.post(
  "/labels/create",
  uploader.single("logo"),
  async (req, res, next) => {
    // DO something

    const newLabel = req.body;
    if (req.file) {
      newLabel.logo = req.file.path;
    }

    try {
      const dbResult = await Label.create(newLabel);
      res.redirect("/labels");
    } catch (error) {
      next(error);
    }
    //
  }
);

router.get("/labels/:id/edit", async (req, res, next) => {
  try {
    const labelId = req.params.id;
    const dbResult = await Label.findById(labelId);
    res.render("edit_form_labels.hbs", { label: dbResult });
  } catch (error) {
    next(error);
  }
});

router.post("/labels/:id/edit", async (req, res, next) => {
  try {
    const labelId = req.params.id;
    console.log(req.body);
    const updatedLabel = await Label.findByIdAndUpdate(labelId, req.body);
    res.redirect("/labels");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
