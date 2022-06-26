const express = require('express');
const authController = require("../controllers/auth.js")

var router = express.Router();
router.post("", authController.Login)

module.exports = router;