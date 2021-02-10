const express = require('express');
const path = require('path');
const page5 = express();


page5.use(express.static(path.join(__dirname, "public")));

page5.get('/page5', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index5.html'));
})


module.exports = page5;