var express = require('express')
  , router = express.Router();
var mongoose = require('mongoose');
var reportCtrl = require('../controllers/reportController');

router.get('/', function(req, res) {
  reportCtrl.getReports(function(response){
    res.json(response);
  });
});

router.post('/', function(req, res){
  reportCtrl.createReport(req, function(response){
    res.json(response);
  });
});


router.delete('/:id', function(req, res){
  reportCtrl.removeReport(req, function(response){
    res.json(response);
  });
});

module.exports = router
