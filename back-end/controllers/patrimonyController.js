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
    address:req.body.address,
    imagePath:req.body.imagePath
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
      if(req.body.imagePath) patrimony.imagePath = req.body.imagePath;

      patrimony.save(function(err, patrimony){
        if(err) callback({err:'Não foi possivel salvar'});
        else callback(patrimony);
      });
    }
  });
};

exports.addAdditionalInformations = function(req, callback){
  Patrimony.findOne({_id:req.params.id}, function(error, patrimony){
    if(error){
      res.json({error:'Patrimônimo não encontrado'});
    }else{
      patrimony.additionalInformations.push(req.body.addInfo);
      patrimony.save(function(err, patrimony){
        if(err) callback({err:'Não foi possível adicionar a informação'});
        else callback(patrimony);
      });
    }
  });
};

exports.removeInfoAditional =  function(req, callback){
  Patrimony.findOne({_id:req.params.id_patrimony}, function(error, patrimony){
    if(error){
      return callback({error:'Não foi possível remover a informação adicional'})
    }else{
      //patrimony.additionalInformations.update({}, {$unset : {"patrimony.additionalInformations.req.params.index_information" : 1 }})
      if(req.params.index_information < 0 || req.params.index_information >= patrimony.additionalInformations.length || patrimony.additionalInformations.length == 0)
      {
        return callback({response:'Erro durante a remoção do comentário'});
      }
      patrimony.additionalInformations.splice(req.params.index_information, 1);
      patrimony.save(function(err){
          if(err) return callback({response:'Erro durante a remoção do comentário'});
          else return callback({response:'Comentário excluido com sucesso'});
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
