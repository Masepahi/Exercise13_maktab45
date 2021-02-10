const express = require('express');
const fs = require('fs');
const path = require('path');
const user = require('../data/users.json');
const bodyParser = require('body-parser');
const handle = require('../localModule/handleUser.js');
const userRoute = express.Router();


userRoute.post('/getUser', handle.postGetUsers());

module.exports = router;