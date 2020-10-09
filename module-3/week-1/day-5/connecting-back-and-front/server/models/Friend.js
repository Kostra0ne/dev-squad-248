const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  name: String,
  profileImage: String,
  age: Number,
  doesCode: Boolean,
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;
