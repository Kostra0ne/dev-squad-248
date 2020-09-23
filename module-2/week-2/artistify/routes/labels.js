const express = require("express");
const router = express.Router();
const Label = require("../models/Label");
const uploader = require("../config/cloudinary");

router.get("/labels", (req, res, next) => {
  //   console.log(req.body, "this is body");
  //   console.log(req.params, "this is req params-----");

  //   Label.find() --- This has the same effect with or without an empty object. It will get you all the documents from the Label collection.
  Label.find({}) // --- ^
    .then((dbResult) => {
      res.render("labels/labels.hbs", { labels: dbResult });
    })
    .catch((error) => {
      next(error); // Sends us to the error handler middleware in app.js if an error occurs
    });
});

router.get("/labels/:id/delete", (req, res, next) => {
  // In your html you will usually have <a href="/labels/{{yourItem._id}}/delete">Delete </a>
  // Which will resolve into <a href="/labels/5cfR.../delete>Delete</a>"
  // When you click on the anchor tag, you will be able to know which item has been clicked
  // by it's id, which then helps you to delete it.

  const labelId = req.params.id;
  Label.findByIdAndDelete(labelId)
    .then((dbResult) => {
      res.redirect("/labels"); // Redirect to "/labels" after delete is successful
    })
    .catch((error) => {
      next(error); // Sends us to the error handler middleware in app.js if an error occurs
    });
});

router.get("/labels/create", (req, res, next) => {
  res.render("labels/create_form_labels.hbs");
});

router.post(
  "/labels/create",
  uploader.single("logo"), // Middleware function that allows you to read and upload to cloudinary
  // The uploaded file can be found at req.file
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
      next(error); // Sends us to the error handler middleware in app.js if an error occurs
    }
    //
  }
);

router.get("/labels/:id/edit", async (req, res, next) => {
  try {
    const labelId = req.params.id;
    const dbResult = await Label.findById(labelId);
    res.render("labels/edit_form_labels.hbs", { label: dbResult });
  } catch (error) {
    next(error); // Sends us to the error handler middleware in app.js if an error occurs
  }
});

router.post("/labels/:id/edit", async (req, res, next) => {
  try {
    const labelId = req.params.id;
    console.log(req.body);
    const updatedLabel = await Label.findByIdAndUpdate(labelId, req.body);
    res.redirect("/labels");
  } catch (error) {
    next(error); // Sends us to the error handler middleware in app.js if an error occurs
  }
});

module.exports = router;
