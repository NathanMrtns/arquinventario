var express = require('express')
  , router = express.Router();
var mongoose = require('mongoose');
var Patrimony = mongoose.model('Patrimony');
var patrimonyCtrl = require('../controllers/patrimonyController');

router.get('/', function(req, res) {
  patrimonyCtrl.getPatrimonies(function(response){
    res.json(response);
  });
});

router.get('/:searchFilter/:searchField/', function(req,res){
  patrimonyCtrl.getPatrimoniesByFilter(req, function(response){
    res.json(response);
  });
})

router.post('/', function(req, res){
  patrimonyCtrl.createPatrimony(req, function(response){
    res.json(response);
  });
});

router.put('/edit/:id', function(req, res){
  patrimonyCtrl.updatePatrimony(req, function(response){
    res.json(response);
  });
});

router.put('/addInformation/:id', function(req, res){
  patrimonyCtrl.addAdditionalInformations(req, function(response){
    res.json(response);
  });
});

router.delete('/:id', function(req, res){
  patrimonyCtrl.removePatrimony(req, function(response){
    res.json(response);
  });
});

module.exports = router
