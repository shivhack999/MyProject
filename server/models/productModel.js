const mongoose = require("mongoose");
const SizeSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
});

const ColorSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  sizes: [SizeSchema],
  images: [String],
});

const ProductSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  buyPrice: {
    type: Number,
    require: true,
  },
  sellPrice: {
    type: Number,
    require: true,
  },
  discount: {
    type: Number,
    require: true,
  },
  fabric: String,
  pattern: String,
  occasion: String,
  neck: String,
  minPrice: {
    type: Number, // Price as string to accommodate formats like '299.00'
    required: true,
  },
  colors: [ColorSchema],
});

const product = mongoose.model("product", ProductSchema);
module.exports = product;