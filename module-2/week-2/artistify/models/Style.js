const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const styleSchema = new Schema({
  name: String,
  color: String,
});

const Style = mongoose.model("Style", styleSchema);

module.exports = Style;
