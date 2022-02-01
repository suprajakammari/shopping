const mongoose = require("mongoose");

const Size = mongoose.model(
  "Size",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Size;
