var app = require('./app_config.js');
//var db = require('./db_config.js');
var validator = require('validator');

var userRoutes = require('./routes/user');
var patrimonyRoutes = require('./routes/patrimony');
var loginRoutes = require('./routes/login');


app.use('/user', userRoutes);
app.use('/patrimony', patrimonyRoutes);
app.use('/login', loginRoutes);
app.get('/', function(req, res) {
	res.end('Arquinventário home page!');
});
