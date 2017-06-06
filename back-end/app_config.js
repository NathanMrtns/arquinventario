var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var router = express.Router();

var allowCors = function(req, res, next) {

	res.header('Acess-Control-Allow-Origin', '127.0.0.1:5000');
	res.header('Acess-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Acess-Control-Allow-Headers', 'Content-Type');
	res.header('Acess-Control-Allow-Credentials', 'true');

	next();
}

//DB Connection
var db_string = 'mongodb://127.0.0.1/arquinventario';
var mongoose = require('mongoose').connect(db_string);

//Models
require('./models/user');

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


//Routes
var userRoutes = require('./routes/user.js');
