require("dotenv").config();
const Label = require("../models/Label");
const mongoose = require("mongoose");

const labels = [
  {
    name: "Nuclear Blast",
    country: "Sweden",
    city: "Stockholm",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Nuclear-Blast_logo.jpg/250px-Nuclear-Blast_logo.jpg",
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Label.create(labels)
      .then((dbResult) => {
        console.log(dbResult);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
