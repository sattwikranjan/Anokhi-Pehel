const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  class: {
    type: Array,
    default: [],
  },
  location: {
    type: String,
    default: "",
  },
  pickDays: {
    type: Array,
    default: [],
  },
  dropDays: {
    type: Array,
    default: [],
  },
  contact: {
    type: String,
    required: [true, "contact is required"],
  },
});

const teacherModel = mongoose.model("Teachers", teacherSchema);

module.exports = teacherModel;
