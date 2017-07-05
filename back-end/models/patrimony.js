var mongoose = require('mongoose');

var patrimonySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type:Number
  },
  style:{
    type:String
  },
  history:{
    type:String
  },
  description:{
    type:String
  },
  tipology:{
    type:String
  },
  address:{
    type:String
  }
},{collection:'patrimony'});

mongoose.model('Patrimony', patrimonySchema);
