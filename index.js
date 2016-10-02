'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var sqlite3 = require('sqlite3');
var path = require('path');
//ログ出力するpackage
var morgan = require('morgan');

var PORT = process.env.PORT || 8080;

var router = express.Router();

app.use(bodyParser.urlencoded( {extended : true} ));
app.use(bodyParser.json());
//アクセスがあったらログ出力
app.use(morgan('short'));

//Routeの設定
// app.use('/api', router);

app.get('/api', function(req, res){
	res.contentType('application/json');
	var json = {
		"user1" : {
			"name" : "mahesh", 
			"password" : "password1",
			"profession" : "teacher",
			"id": 1
		},

		"user2" : {
			"name" : "suresh",
			"password" : "password2",
			"profession" : "librarian",
			"id": 2
		},

		"user3" : {
			"name" : "ramesh",
			"password" : "password3",
			"profession" : "clerk",
			"id": 3
		}
	};
	// res.end(json);
	res.end(JSON.stringify(json));
});

app.listen(PORT);
console.log('server is running port ' + PORT);