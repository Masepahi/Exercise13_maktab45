const express = require('express');
const path = require('path');
const page4 = express();


page4.use(express.static(path.join(__dirname, "public")));

page4.get('/page4', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index4.html'));
})


module.exports = page4;