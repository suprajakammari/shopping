const mongoose = require("mongoose");

const Products = mongoose.Schema({
    category: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category"
        }
    ],
    product: String,
    price: Number,
    size: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Size"
        }
    ],
    brand: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Brand"
        }
    ],
});

module.exports = mongoose.model("Product", Products);