var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: String
});

mongoose.model('User', userSchema);
