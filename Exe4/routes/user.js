const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const usersArray = require('../data/users.json');
const userRoute = express.Router();

userRoute.use(bodyParser.urlencoded({ extended: false }));
userRoute.use(bodyParser.json());

userRoute.post("/getUser", (req, res) => {
  const body = req.body;

  if (!body || !body.id) return res.status(400).send("pls fill the fields");
  
  let targetUser = usersArray.find((user) => user.id === body.id);
  
  if (!targetUser) return res.status(404).send('selected id is not available');

  res.send(targetUser);
});

module.exports = userRoute;
