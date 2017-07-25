var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  patrimony_id: {
    type: String,
    required: true
  },
  description: {
    type:String,
    required: true,
  }
},{collection:'event'});

mongoose.model('Event', eventSchema);