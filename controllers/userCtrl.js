const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");

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

module.exports = { loginController };
