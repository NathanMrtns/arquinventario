var mongoose = require('mongoose');
var Patrimony = mongoose.model('Patrimony');

exports.getPatrimonies = function(callback){
  Patrimony.find({}, function(error, patrimonies){
    if(error){
      callback({error:'Não é possivel retornar patrimônios'});
    }else{
      callback(patrimonies);
    }
  });
};

exports.getPatrimoniesByFilter = function(req,callback){
  var filter = req.params.searchFilter;
  var search = req.params.searchField;
  switch(filter) {
    case "year":
        console.log("in");
        searchByYear(search, callback);
        break;
    case "style":
        searchByStyle(search, callback);
        break;
    case "tipology":
        searchByTipology(search, callback);
        break;
    case "address":
        searchByAddress(search, callback);
        break;
    default:
        searchByName(search, callback);
        break;
  }
}

exports.createPatrimony = function(req, callback){
  var patrimony = new Patrimony({
    name:req.body.name,
    year:req.body.year,
    style:req.body.style,
    history:req.body.history,
    description:req.body.description,
    tipology:req.body.tipology,
    address:req.body.address
  });

  patrimony.save(function(err){
    if (err) callback(err);
    else callback(200);
  });
};

exports.updatePatrimony = function(req, callback){
  Patrimony.findOne({_id:req.params.id}, function(error, patrimony){
    if(error){
      res.json({error:'Patrimônio não encontrado!'});
    }else{
      if(req.body.name) patrimony.name = req.body.name;
      if(req.body.year) patrimony.year = req.body.year;
      if(req.body.style) patrimony.style = req.body.style;
      if(req.body.history) patrimony.history = req.body.history;
      if(req.body.description) patrimony.description = req.body.description;
      if(req.body.tipology) patrimony.tipology = req.body.tipology;
      if(req.body.address) patrimony.address = req.body.address;

      patrimony.save(function(err, patrimony){
        if(err) callback({err:'Não foi possivel salvar'});
        else callback(patrimony);
      });
    }
  });
};

exports.removePatrimony = function(req, callback){
  Patrimony.findOne({_id:req.params.id}, function(error, patrimony){
    if(error){
      callback({error:'Não foi possivel retornar o patrimônio'});
    }else{
      patrimony.remove(function(error){
        if(!error){
          callback({response:'Patrimônio excluido com sucesso'});
        }
      });
    }
  });
};

function searchByYear(stringSearch, callback){
    Patrimony.find({ year: parseInt(stringSearch) }, function(error, patrimonies){
        if(error){
          callback({error:'Não é possivel retornar patrimônios'});
        }else{
          callback(patrimonies);
      }
   })
}

function searchByStyle(stringSearch, callback){
    Patrimony.find({ style : { "$regex": stringSearch, "$options": "i" } }, function(error, patrimonies){
        if(error){
          callback({error:'Não é possivel retornar patrimônios'});
        }else{
          callback(patrimonies);
      }
   })
}

function searchByTipology(stringSearch, callback){
    Patrimony.find({ tipology : { "$regex": stringSearch, "$options": "i" } }, function(error, patrimonies){
        if(error){
          callback({error:'Não é possivel retornar patrimônios'});
        }else{
          callback(patrimonies);
      }
   })
}

function searchByAddress(stringSearch, callback){
    Patrimony.find({ address : { "$regex": stringSearch, "$options": "i" } }, function(error, patrimonies){
        if(error){
          callback({error:'Não é possivel retornar patrimônios'});
        }else{
          callback(patrimonies);
      }
   })
}

function searchByName(stringSearch, callback){
    Patrimony.find({ name : { "$regex": stringSearch, "$options": "i" } }, function(error, patrimonies){
        if(error){
          callback({error:'Não é possivel retornar patrimônios'});
        }else{
          callback(patrimonies);
      }
   })
}
