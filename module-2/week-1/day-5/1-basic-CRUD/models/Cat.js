const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  color: String,
  picture: {
    type: String,
    default: "https://purr.objects-us-east-1.dream.io/i/image035.jpg",
  },
});

const CatModel = mongoose.model("cats", CatSchema);

module.exports = CatModel; // use this object to interact with (CRUD)
