const express = require("express");

const router = express.Router();
const { isLoggedIn } = require("../middleware/authenticate");
const { getflights1 } = require("../Controllers/flights");

router.route("/flights1").post(isLoggedIn, getflights1);
router.route("/flights2").post(getflights1);

module.exports = router;
