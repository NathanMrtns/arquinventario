var app = require('./app_config.js');
var db = require('./db_config.js');
var validator = require('validator');

var userRoutes = require('./routes/user');

app.use('/user', userRoutes);

app.get('/', function(req, res) {
	res.end('Arquinventário home page!');
});
