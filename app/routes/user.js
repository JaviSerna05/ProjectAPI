const express = require('express');
const UserCtrl = require('../controllers/UserController');

const Router = express.Router();

Router.get('/', UserCtrl.index)
      .post('/',UserCtrl.addUser)
      .get('/:id/:value', UserCtrl.find, UserCtrl.getUser)
      .put('/:id/:value', UserCtrl.find, UserCtrl.editUser)
      .delete('/:id/:value', UserCtrl.find, UserCtrl.deleteUser)

module.exports = Router;