const express = require('express');
const router = require('./router/router');
const app = express();
const  port = 3000


app.get('/', (req, res) => {
    res.send("do whatever you want to do");

});


app.use('/router', router);


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

