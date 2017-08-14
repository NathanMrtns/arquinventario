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
    status: "pending",
    imagePath: req.body.imagePath
  });

  ticket.save(function(err){
    if (err) callback(err);
    else callback(200);
  });
};

exports.acceptTicket = function(req, callback){
  console.log(req.params.id);
  Ticket.findOne({_id:req.params.id}, function(error, ticket){
      if(error){
        callback({error:'Ticket não encontrado!'});
      }else{
        ticket.status = "accepted"
        ticket.save(function(err, ticket){
          if(err) callback({err:'Não foi possivel salvar'});
          else callback(ticket);
        });
      }
    });
}

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
