const express = require('express');
const path = require('path');
const page3 = express();


page3.use(express.static(path.join(__dirname, "public")));

page3.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index3.html'));
})


module.exports = page3;