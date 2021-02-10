const express = require('express');
const adminRoute = require('./routes/admin');
const user = require('./routes/user');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('../localModule/handleUser.js');

const app = express();
const port = 3000


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.send(`<a href="./routes/getAllUser">Admin Page</a>
        <a href="./routes/getUser">User Page </a>`);
    

});

app.get('/routes/getUser', (req, res) => {
    res.sendFile(path.join(__dirname + './public/index.html'));
});


app.use('/admin', adminRoute);
app.use('/user', user);



app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

