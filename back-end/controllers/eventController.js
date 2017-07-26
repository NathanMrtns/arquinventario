var mongoose = require('mongoose');
var Event = mongoose.model('Event');

exports.getEvents = function(callback){
  Event.find({}, function(error, events){
    if(error){
      callback({error:'Não é possivel retornar patrimônios'});
    }else{
      callback(events);
    }
  });
};

exports.getEventsByPatrimony = function(req, callback){
  Event.find({patrimony_id:req.params.patrimony_id}, function(error, events){
    if(error){
      callback({error:'Não é possivel retornar patrimônios'});
    }else{
      callback(events);
    }
  });
};

exports.createEvent = function(req, callback){
  var event = new Event({
    patrimony_id:req.body.patrimony_id,
    description:req.body.description
  });

  event.save(function(err){
    if (err) callback(err);
    else callback(200);
  });
};

exports.removeEvent = function(req, callback){
  Event.findOne({_id:req.params.id}, function(error, Event){
    if(error){
      callback({error:'Não foi possivel retornar o evento'});
    }else{
      Event.remove(function(error){
        if(!error){
          callback({response:'Evento excluido com sucesso'});
        }
      });
    }
  });
};