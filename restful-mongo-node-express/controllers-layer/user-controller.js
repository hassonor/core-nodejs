const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const logic = require("../business-logic-layer/user-logic");
const User = require("../models/user-model");

const router = express.Router();

router.post("/login", async (request, response) => {
  const user = await logic.getExistUserAsync(request.body.email);
  if (!user) {
    return response.status(401).json({ message: "Authentication failed. No user found" });
  }
  if (user) {
    if (!user.comparePassword(request.body.password, user.hashPassword)) {
      return response.status(401).json({ message: "Authentication failed. Wrong password" });
    }
    return response.json({
      token: jwt.sign({
        email: user.email,
        username: user.username,
        _id: user.id
      }, config.jwtKey, { expiresIn: "1d" })
    });

  }
});


router.post("/register", async (request, response) => {
  try {
    const newUser = new User(request.body);
    newUser.hashPassword = bcrypt.hashSync(request.body.password, 10);

    const addedUser = await logic.addUserAsync(newUser);
    addedUser.hashPassword = undefined;

    return response.status(201).json(addedUser);
  } catch (err) {
    return response.status(500).send(err.message);
  }
});


module.exports = router;
