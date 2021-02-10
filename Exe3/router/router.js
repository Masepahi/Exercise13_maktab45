const express = require('express');
const router = express.Router();



router.get('/hello', (req, res) => {
    res.send("Hello World")
})


router.get('/bye', (req, res) => {
    res.send("Bye World")
    
});


module.exports = router