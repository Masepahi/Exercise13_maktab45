const users = require('../data/user.json');

function postGetUsers (req, res, next) {
  const body = req.body;

  if (body.firstName === ''.trim() || body.lastName === ''.trim() || body.userName === ''.trim()) {
    return res.send('fill the inputs');
  }
  let userData = users;
  const user = userData.find((item) => {
    if (item.firstName === body.firstName || item.lastName === body.lastName || item.userName === body.userName) {
        return item;
    } 
  });

};

module.exports = postGetUsers;