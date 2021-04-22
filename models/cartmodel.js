const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: String,
  imgurl: String,
  price: Number,
  category: String,
  id: Number,
  description: String,
});

export const Product = mongoose.model("Cart", cartSchema);