const controller = require("../controllers/products.controller");

module.exports = function(app) {
  app.get("/api/categories", controller.getAllCategories);
  app.get("/api/sizes", controller.getAllSizes);
  app.get("/api/brands", controller.getAllBrands);
  app.get("/api/products", controller.getAllProducts);
 };
