const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
