const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.products = require("./products.model");
db.size = require("./size.model");
db.category = require("./category.model");
db.brand = require("./brand.model");

module.exports = db;
