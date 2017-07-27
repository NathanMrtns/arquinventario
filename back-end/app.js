var app = require('./app_config.js');
var validator = require('validator');

//Routes
var userRoutes = require('./routes/user');
var patrimonyRoutes = require('./routes/patrimony');
var loginRoutes = require('./routes/login');
var reportRoutes = require('./routes/report');
var ticketRoutes = require('./routes/ticket');
var eventRoutes = require('./routes/event');
var uploadRoute = require('./routes/upload')

app.use('/user', userRoutes);
app.use('/patrimony', patrimonyRoutes);
app.use('/login', loginRoutes);
app.use('/report', reportRoutes);
app.use('/ticket', ticketRoutes);
app.use('/event', eventRoutes)
app.use('/upload', uploadRoute);

app.get('/', function(req, res) {
	res.end('Arquinventário home page!');
});
