const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Missing username"]

    },
    email: {
      type: String,
      required: [true, "Missing Email"]
    },
    hashPassword: {
      type: String,
      required: true
    },
    created_date: {
      type: Date,
      default: Date.now
    }
  },
  { versionKey: false }
);

UserSchema.methods.comparePassword = (password, hasPassword) => bcrypt.compareSync(password, hasPassword);
const UserModel = mongoose.model("UserModel", UserSchema, "users");

module.exports = UserModel;