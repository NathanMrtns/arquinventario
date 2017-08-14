var mongoose = require('mongoose');

var ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type:String,
    required: true,
  },
  address : {
    type:String,
    required:true
  },
  status: {
    type:String,
    required:true
  },
  imagePath:{
    type:String
  }
},{collection:'ticket'});

mongoose.model('Ticket', ticketSchema);