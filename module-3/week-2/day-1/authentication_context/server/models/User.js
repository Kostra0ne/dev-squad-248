const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: {
    type: String,
    default: "https://upload.wikimedia.org/wikipedia/en/1/14/Ralph_Wiggum.png",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
