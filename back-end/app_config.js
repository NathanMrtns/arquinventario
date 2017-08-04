var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors')({credentials: true, origin: true});

var allowCors = function(req, res, next) {

	res.header('Acess-Control-Allow-Origin', '*');
	res.header('Acess-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Acess-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept');
	res.header('Acess-Control-Allow-Credentials', 'true');

	next();
}

//app.use(allowCors);

//DB Connection
var db_string = 'mongodb://nathanmrtns:arquinventariodb@ds033123.mlab.com:33123/arquinventario'
//var db_string = 'mongodb://localhost/arquinventario';

var mongoose = require('mongoose').connect(db_string);

//Models
require('./models/user');
require('./models/patrimony');
require('./models/report')
require('./models/ticket')
require('./models/event');

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
