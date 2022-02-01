const mongoose = require("mongoose");

const Brands = mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Brand", Brands);
