// server/models/Product.js
const mongoose = require("../db");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;