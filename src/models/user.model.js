const mongoose = require("mongoose");

const toJSON = require("../utils/toJSON");

const { ObjectId } = mongoose.Types;

const userSchema = mongoose.Schema(
  {
    trial: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

toJSON(userSchema);

const User = mongoose.model("User", userSchema);

module.exports = User;
