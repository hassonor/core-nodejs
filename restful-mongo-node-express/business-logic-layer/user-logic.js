require("../data-access-layer/dal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");


function addUserAsync(user) {
  return user.save();
}

function getExistUserAsync(email) {
  return User.findOne({ email }).exec();
}

module.exports = { addUserAsync, getExistUserAsync };
