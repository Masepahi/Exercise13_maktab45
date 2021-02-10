const express = require('express');
const path = require('path');
const pages = express();


pages.use(express.static(path.join(__dirname, "public")));

pages.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index.html'));
})

pages.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index2.html'));
})


pages.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index3.html'));
})

pages.get('/page4', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index4.html'));
})

pages.get('/page5', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index5.html'));
})



module.exports = pages;