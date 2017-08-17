var mongoose = require('mongoose');

var reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  description: {
    type:String,
    required: true,
  },
  address : {
    type:String,
    required:true
  },
  imagePath:{
    type:String
  }
},{collection:'report'});

mongoose.model('Report', reportSchema);
