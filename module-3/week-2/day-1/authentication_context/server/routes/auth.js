const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const uploadCloud = require("../config/cloudinary");
const salt = 10; // The bigger the salt, the longer it will take to encrypt the password

router.post("/signin", async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;

    const userInDB = await User.findOne({ email });

    if (!userInDB) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isValidPassword = await bcrypt.compare(password, userInDB.password);

    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    req.session.currentUser = userInDB._id; // We only need the user's id in order to do any crud operation
    res.redirect("/api/auth/isLoggedIn");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post(
  "/signup",
  uploadCloud.single("profileImage"),
  async (req, res, next) => {
    try {
      const { email, password, username } = req.body;

      const userInDB = await User.findOne({ email });
      if (userInDB) {
        return res.status(400).json({ message: "Email already taken" });
      } else {
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = { email, password: hashedPassword, username };
        if (req.file) {
          newUser.profileImage = req.file.path;
        }
        const createdUser = await User.create(newUser);
        res.sendStatus(201);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

router.get("/isLoggedIn", async (req, res, next) => {
  try {
    if (!req.session.currentUser) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      const user = await User.findById(req.session.currentUser).select(
        "-password"
      ); // Removes the password key from the retrieved document.
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/logout", (req, res, next) => {
  if (req.session.currentUser) {
    req.session.destroy(function (err) {
      if (err) {
        return res.status(500).json(err);
      }
      res.sendStatus(204);
    });
  } else {
    res.status(400).json({ message: "No session" });
  }
});

module.exports = router;
