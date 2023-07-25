const express = require("express");
const {
  loginController,
  authController,
  getAllTeachersController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes

//LOGIN || POST
router.post("/login", loginController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//GET ALL TEACHERS
router.get("/getAllTeachers", getAllTeachersController);

module.exports = router;
