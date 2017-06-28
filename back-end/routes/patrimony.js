var express = require('express')
  , router = express.Router();
var mongoose = require('mongoose');
var Patrimony = mongoose.model('Patrimony');
var patrimonyCtrl = require('../controllers/patrimonyController');

router.get('/', function(req, res) {
  patrimonyCtrl.getPatrimonies(function(response){
    res.json(response);
  });
});

router.get('/:searchFilter/:searchField/', function(req,res){
  patrimonyCtrl.getPatrimoniesByFilter(req, function(response){
    res.json(response);
  });
})

// router.get('/:filterYear', function(req,res){
//   patrimonyCtrl.getPatrimoniesByYear(req,function(response){
//     res.json(response);
//   });
// })

// router.get('/:filterStyle', function(req,res){
//   patrimonyCtrl.getPatrimoniesByStyle(req,function(response){
//     res.json(response);
//   });
// })

// router.get('/:filterTipology', function(req,res){
//   patrimonyCtrl.getPatrimoniesByTipology(req,function(response){
//     res.json(response);
//   });
// })

router.post('/', function(req, res){
  patrimonyCtrl.createPatrimony(req, function(response){
    res.json(response);
  });
});

router.put('/edit/:id', function(req, res){
  patrimonyCtrl.updatePatrimony(req, function(response){
    res.json(response);
  });
});

router.delete('/:id', function(req, res){
  patrimonyCtrl.removePatrimony(req, function(response){
    res.json(response);
  });
});

module.exports = router
