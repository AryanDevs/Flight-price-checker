const express = require("express");

const router = express.Router();
const { tester } = require("../Controllers/test");

router.route("/test").get(tester);

module.exports = router;
