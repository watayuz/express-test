var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');
var path = require('path');
//ログ出力するpackage
var morgan = require('morgan');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//アクセスがあったらログ出力
app.use(morgan('short'));


var PORT = process.env.PORT || 8080;

var router = express.Router();

//top page
app.get('/', function(req, res){
	//HTMLファイルをレンダリングする
	res.sendFile(path.join(__dirname+'/index.html'));
});


router.get('/', function(req, res){
	res.json( {message: 'hello'} );
});

app.use('/api', router);

app.listen(PORT);
console.log('server is running port ' + PORT);