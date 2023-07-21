const express = require("express");
const { loginController } = require("../controllers/userCtrl");

//router onject
const router = express.Router();

//routes
router.post("/login", loginController);

module.exports = router;
