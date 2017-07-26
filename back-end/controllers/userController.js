var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.getUsers = function(callback){
  User.find({}, function(error, users){
    if(error){
      callback({error:'Não é possivel retornar usuários'});
    }else{
      callback(users);
    }
  });
};

exports.createUser = function(req, callback){
  var user = new User({
    role:req.body.role,
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  });

  user.save(function(err){
    if (err) callback(err);
    else callback(200);
  });
};

exports.updateUser = function(req, callback){
  User.findOne({_id:req.params.id}, function(error, user){
    if(error){
      res.json({error:'Usuário não encontrado!'});
    }else{
      if(req.body.role){
        user.role = req.body.role;
      }
      if(req.body.name){
        user.name = req.body.name;
      }
      if(req.body.email){
        user.email = req.body.email;
      }
      if(req.password){
        user.password = req.body.password;
      }

      user.save(function(err, user){
        if(err) callback({err:'Não foi possivel salvar'});
        else callback(user);
      });
    }
  });
};

exports.removeUser = function(req, callback){
  User.findOne({_id:req.params.id}, function(error, user){
    if(error){
      callback({error:'Não foi possivel retornar o carro'});
    }else{
      user.remove(function(error){
        if(!error){
          callback({response:'Usuário excluido com sucesso'});
        }
      });
    }
  });
};
