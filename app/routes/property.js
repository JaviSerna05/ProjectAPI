const express = require('express');
const PropertyCtrl = require('../controllers/PropertyController');


const Router = express.Router();

Router.get('/get', PropertyCtrl.getProperties)
      .post('/add',PropertyCtrl.addProperty)
      .get('/:id/:value', PropertyCtrl.find, PropertyCtrl.getProperty)
      .put('/:id/:value', PropertyCtrl.find, PropertyCtrl.editProperty)
      .delete('/:id/:value', PropertyCtrl.find, PropertyCtrl.deleteProperty)

module.exports = Router;