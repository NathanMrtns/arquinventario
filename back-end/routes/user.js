var express = require('express')
  , router = express.Router();
//var db = require('../db_config.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');

// Car brands page
router.get('/', function(req, res) {
  User.find({}, function(error, users){
    if(error){
      res.json({error:'Não é possivel retornar usuários'});
    }else{
      res.send(users);
    }
  })
});

router.post('/', function(req, res){
  var user = new User({name:req.body.name, email:req.body.email});
  user.save(function(err){
    if (err) res.send(err);
    else res.sendStatus(200);
  });
})

module.exports = router
