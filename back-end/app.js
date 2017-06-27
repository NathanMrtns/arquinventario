var app = require('./app_config.js');
var validator = require('validator');

//Routes
var userRoutes = require('./routes/user');
var patrimonyRoutes = require('./routes/patrimony');
var loginRoutes = require('./routes/login');
var reportRoutes = require('./routes/report');
var ticketRoutes = require('./routes/ticket');

app.use('/user', userRoutes);
app.use('/patrimony', patrimonyRoutes);
app.use('/login', loginRoutes);
app.use('/report', reportRoutes);
app.use('/ticket', ticketRoutes);

app.get('/', function(req, res) {
	res.end('Arquinventário home page!');
});
