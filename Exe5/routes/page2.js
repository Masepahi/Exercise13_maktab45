const express = require('express');
const path = require('path');
const page2 = express();


page2.use(express.static(path.join(__dirname, "public")));

page2.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index2.html'));
})


module.exports = page2;