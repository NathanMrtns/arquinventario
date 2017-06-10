var express = require('express')
  , router = express.Router();
var mongoose = require('mongoose');
var loginController = require('../controllers/loginController');

router.post('/', function(req, res){
  loginController.login(req, function(response){
    if(response == 200){
      res.sendStatus(200);
    }else if(response == 401){
      res.status(401).send('Unauthorized');
    }else {
      res.status(400).send('Bad request ' + response);
    }
  });
});

module.exports = router
