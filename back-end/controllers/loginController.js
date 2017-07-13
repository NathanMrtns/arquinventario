var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.login = function(req, callback){
  User.findOne({ email: req.body.email }, function(error, user){
    if(error){
      callback(404);
    }if(user){
      if(user.password == req.body.password){
        callback(200);
      }else{
        callback(401);
      }
    }else{
      callback(404);
    }
  });
};
