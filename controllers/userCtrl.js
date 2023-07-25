const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const teacherModel = require("../models/teacherModel");
//const teacherModel = require("../models/teacherModel");
//login controller
const loginController = async (req, res) => {
  try {
    const user = await adminModel.findOne({
      username: req.body.username,
    });
    if (!user) {
      return res
        .status(200)
        .send({ message: "Wrong Credentials", success: false });
    }
    const isMatch = (await user.password) === req.body.password;
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invalid email or password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .send({ message: "Welcome Sir", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};

//Auth Controller
const authController = async (req, res) => {
  try {
    const user = await adminModel.findById({ _id: req.body.userId });
    user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "user not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};

//GET ALL TEACHERS CONTROLLER
const getAllTeachersController = async (req, res) => {
  try {
    const teachers = await teacherModel.find();
    res.status(200).send({
      message: "Teachers List Fetched Successfully",
      success: true,
      data: teachers,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error While fetching teachers list",
    });
  }
};

module.exports = { loginController, authController, getAllTeachersController };
