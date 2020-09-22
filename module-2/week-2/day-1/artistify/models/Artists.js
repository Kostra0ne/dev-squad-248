const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  isBand: Boolean,
  description: String,
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
