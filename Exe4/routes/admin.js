const express = require('express');
const fs = require('fs');
const adminRouter = express.Router();



adminRouter.get('/getAllUser', (req, res) => {
  fs.readFile('./data/users.json', 'utf-8', (err, data) => {
    if (err) return console.log(err);
    res.send(data);
  })
})

module.exports = adminRouter