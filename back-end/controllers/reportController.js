var mongoose = require('mongoose');
var Report = mongoose.model('Report');

exports.getReports = function(callback){
  Report.find({}, function(error, reports){
    if(error){
      callback({error:'Não é possivel retornar denuncias'});
    }else{
      callback(reports);
    }
  });
};

exports.createReport = function(req, callback){
  var report = new Report({
    title : req.body.title,
    description : req.body.description,
    address: req.body.address
  });

  report.save(function(err){
    if (err) callback(err);
    else callback(200);
  });
};

exports.removeReport = function(req, callback){
  Report.findOne({_id:req.params.id}, function(error, report){
    if(error){
      callback({error:'Não foi possivel remover a denuncia'});
    }else{
      report.remove(function(error){
        if(!error){
          callback({response:'Denuncia excluida com sucesso'});
        }
      });
    }
  });
};
