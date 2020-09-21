const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labelSchema = new Schema({
  name: { type: String },
  country: String,
  logo: {
    type: String,
    default: "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  },
  city: String,
});

const Label = mongoose.model("Label", labelSchema);

module.exports = Label;
