const express = require('express');
const app = express();
const page1 = require('./routes/page1')
const page2 = require('./routes/page2')
const page3 = require('./routes/page3')
const page4 = require('./routes/page4')
const page5 = require('./routes/page5')
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

app.use('/pages', page1)
app.use('/pages', page2)
app.use('/pages', page3)
app.use('/pages', page4)
app.use('/pages', page5)



app.listen (port, (req, res) => {
    console.log('Server started on port 5000');
})