const express = require('express');
const adminRoute = require('./routes/admin');
const user = require('./routes/user.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send(`<a href="./admin/getAllUser">Admin Page</a>
        <a href="./user/getUser">User Page </a>`);
    

});



app.use('/admin', adminRoute);
app.use('/user', user);



app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

