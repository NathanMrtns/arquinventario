var mongoose = require('mongoose');

var patrimonySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type:String
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
  }
});

mongoose.model('Patrimony', patrimonySchema);
