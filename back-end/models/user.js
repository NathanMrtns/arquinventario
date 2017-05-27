var mongoose = require('mongoose');
var db = mongoose.Schema;

var userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: String
});

exports.User = mongoose.model('User', userSchema);
