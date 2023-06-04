const express = require("express");
const router = express.Router();

const { signup, login } = require("../Controllers/user");

router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;
