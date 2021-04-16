const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  password: String,
});
console.log(mongoose);

export const User = mongoose.model("User", userSchema);
