var express = require('express')
  , router = express.Router();
var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var eventCtrl = require('../controllers/eventController');

router.get('/', function(req, res) {
  eventCtrl.getEvents(function(response){
    res.json(response);
  });
});

router.get('/:patrimony_id', function(req, res) {
  eventCtrl.getEventsByPatrimony(req, function(response){
    res.json(response);
  });
});

router.post('/', function(req, res){
  eventCtrl.createEvent(req, function(response){
    res.json(response);
  });
});

router.delete('/:id', function(req, res){
  eventCtrl.removeEvent(req, function(response){
    res.json(response);
  });
});

module.exports = router
