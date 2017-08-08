var express = require('express')
  , router = express.Router();
var mongoose = require('mongoose');
var ticketCtrl = require('../controllers/ticketController');

router.get('/', function(req, res) {
  ticketCtrl.getTickets(function(response){
    res.json(response);
  });
});

router.get('/:status', function(req, res) {
  ticketCtrl.getTicketsByStatus(req, function(response){
    res.json(response);
  });
});

router.post('/', function(req, res){
  ticketCtrl.createTicket(req, function(response){
    res.json(response);
  });
});

router.put('/:id', function(req,res){
   ticketCtrl.acceptTicket(req, function(response){
    res.json(response);
  });
})


router.delete('/:id', function(req, res){
  ticketCtrl.removeTicket(req, function(response){
    res.json(response);
  });
});

module.exports = router
