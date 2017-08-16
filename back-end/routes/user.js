var express = require('express')
  , router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var userController = require('../controllers/userController');

router.get('/', function(req, res) {
  userController.getUsers(function(response){
    res.json(response);
  });
});

router.get('/:id', function(req, res) {
  userController.getUserById(req, function(response){
    res.json(response);
  });
});

router.post('/', function(req, res){
  userController.createUser(req, function(response){
    res.json(response);
  });
});

router.put('/edit/:id', function(req, res){
  userController.updateUser(req, function(response){
    res.json(response);
  });
});

router.delete('/:id', function(req, res){
  userController.removeUser(req, function(response){
    res.json(response);
  });
});

module.exports = router
