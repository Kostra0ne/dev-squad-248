const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: String,
  releaseDate: Date,
  label: { type: Schema.Types.ObjectId, ref: "Label" },
  artist: { type: Schema.Types.ObjectId, ref: "Artist" },
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
