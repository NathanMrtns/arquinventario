var mongoose = require('mongoose');
var Ticket = mongoose.model('Ticket');

exports.getTickets = function(callback){
  Ticket.find({}, function(error, tickets){
    if(error){
      callback({error:'Não é possivel retornar tickets'});
    }else{
      callback(tickets);
    }
  });
};

exports.getTicketsByStatus = function(req, callback){
  Ticket.find({status:req.params.status}, function(error, tickets){
    if(error){
      callback({error:'Não é possivel retornar tickets'});
    }else{
      callback(tickets);
    }
  });
};

exports.createTicket = function(req, callback){
  var ticket = new Ticket({
    title : req.body.title,
    description : req.body.description,
    address: req.body.address,
    status: req.body.status
  });

  ticket.save(function(err){
    if (err) callback(err);
    else callback(200);
  });
};

exports.removeTicket = function(req, callback){
  Ticket.findOne({_id:req.params.id}, function(error, ticket){
    if(error){
      callback({error:'Não foi possivel remover o ticket'});
    }else{
      ticket.remove(function(error){
        if(!error){
          callback({response:'Ticket excluido com sucesso'});
        }
      });
    }
  });
};
