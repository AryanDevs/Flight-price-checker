const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 8);
  next();
});

userSchema.methods.tokenise = function () {
  let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

userSchema.methods.checkPassword = async function (enteredPassword) {
  const actualPassword = this.password;
  const isCorrect = await bcrypt.compare(enteredPassword, actualPassword);

  return isCorrect;
};

module.exports = mongoose.model("User", userSchema);
