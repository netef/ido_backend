const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async function (req, res, next) {
  try {
    var users = await User.find();
    res.send(users);
  } catch (err) {
    next();
  }
});

router.post("/", async function (req, res, next) {
  try {
    var user = await User.create(req.body);
    res.send(user);
  } catch (err) {
    next();
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    var user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch (err) {
    next();
  }
});

router.delete("/:id", function (req, res, next) {
  User.findByIdAndDelete(req.params.id)
    .then(function (user) {
      res.send(user);
    })
    .catch(next);
});

module.exports = router;
