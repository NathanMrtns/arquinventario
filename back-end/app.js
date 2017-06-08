var app = require('./app_config.js');
//var db = require('./db_config.js');
var validator = require('validator');

var userRoutes = require('./routes/user');
var patrimonyRoutes = require('./routes/patrimony');


app.use('/user', userRoutes);
app.use('/patrimony', patrimonyRoutes);

app.get('/', function(req, res) {
	res.end('Arquinventário home page!');
});
