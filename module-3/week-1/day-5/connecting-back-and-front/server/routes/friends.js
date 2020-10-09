const express = require("express");
const router = express.Router();
const Friend = require("../models/Friend");

// Prefixed with /friends
router.get("/", (req, res, next) => {
  Friend.find()
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

router.get("/:id", (req, res, next) => {
  Friend.findById(req.params.id)
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

// Route is prefixed with /friends
router.post("/", (req, res, next) => {
  const newFriend = req.body;

  Friend.create(newFriend)
    .then((friendDocument) => {
      res.status(201).json(friendDocument);
    })
    .catch((error) => {
      res.status(500).json(dbErr);
    });
});

// Route is prefixed with /friends
router.patch("/:id", (req, res, next) => {
  const updateValues = req.body;
  Friend.findByIdAndUpdate(req.params.id, updateValues, { new: true })
    .then((friendDocument) => {
      res.status(200).json(friendDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res, next) => {
  Friend.findByIdAndRemove(req.params.id)
    .then((deletedDocument) => {
      res.sendStatus(204);
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
