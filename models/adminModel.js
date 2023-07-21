const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const adminModel = mongoose.model("Admin", adminSchema);

const admin = new adminModel({
  username: "AnokhiAdmin",
  password: "Anokhi",
});

//admin.save();

module.exports = adminModel;
