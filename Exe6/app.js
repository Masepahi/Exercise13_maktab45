const express = require('express');
const pages = require('./routes/pages')
const app = express();
const port = 5000


app.get('/', (req, res) =>{
    res.send(
        `<a href='./pages/page1'>Page 1</a>
        <a href='./pages/page2'>Page 2</a>
        <a href='./pages/page3'>Page 3</a>
        <a href='./pages/page4'>Page 4</a>
        <a href='./pages/page5'>Page 5</a>`
    );
})

app.use('/pages', pages)




app.listen (port, (req, res) => {
    console.log('Server started on port 5000');
})