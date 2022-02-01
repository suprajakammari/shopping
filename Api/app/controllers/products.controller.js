const db = require("../models");
const Products = db.products;
const Size = db.size;
const Category = db.category;
const Brand = db.brand;
const { validationResult } = require("express-validator");

exports.getAllCategories = async (req, res) => {
  try {
    Category.find({}, (err, categories) => {
      if (err) {
        res.status(500).send({ error: true, message: err });
        return;
      }
      res.status(200).send({
        categories,
      });
    });
  } catch (err) {
    res.status(500).send({ error: true, message: err });
  }
};
exports.getAllSizes = async (req, res) => {
  try {
    Size.find({}, (err, sizes) => {
      if (err) {
        res.status(500).send({ error: true, message: err });
        return;
      }
      console.log('sizes', sizes);
      res.status(200).send({
        sizes,
      });
    });
  } catch (err) {
    res.status(500).send({ error: true, message: err });
  }
};
exports.getAllBrands = async (req, res) => {
  try {
    Brand.find({}, (err, brands) => {
      if (err) {
        res.status(500).send({ error: true, message: err });
        return;
      }
      res.status(200).send({
        brands,
      });
    });
  } catch (err) {
    res.status(500).send({ error: true, message: err });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({}).populate("size").populate("brand").populate("category");
    res.status(200).send({
      products,
    });
  } catch (err) {
    res.status(500).send({ error: true, message: err });
  }
};
