const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.isLoggedIn = async function (req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        error: true,
        message: "Failed to authenticate",
      });
    }
    console.log(token);
    const val = jwt.verify(token, process.env.JWT_SECRET);

    console.log(val);
    if (!val) {
      return res.status(401).json({
        error: true,
        message: "Failed to authenticate",
      });
    }

    console.log(val);
    const id = val._id;
    const user = await User.findById(id);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: true,
    });
  }
};
