const express = require('express');
const path = require('path');
const page1 = express();


page1.use(express.static(path.join(__dirname, "public")));

page1.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index.html'));
})


module.exports = page1;