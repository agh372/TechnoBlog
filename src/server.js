var express = require('express'),
	fs = require('fs'),
	http = require('http'),
	path = require('path'),
	multer = require('multer'),
	mongoose = require('mongoose'),
	passport = require("passport"),
	flash = require("connect-flash"),
	bodyParser = require('body-parser');

var app = express();


var cookieParser = require('cookie-parser');
app.use(cookieParser);
//app.use(express.bodyParser());
var session = require('express-session');

app.set('trust proxy', 1) // trust first proxy
app.use(session({
	secret: 'SECRET',
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: true
	}
}))

//app.use(express.session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(flash());


app.use(multer({
	dest: './uploads/'
}).single('photo'));

var logger = require('morgan');
app.use(logger('dev'));

app.use(express.static(__dirname + '/web'));
var expressHbs = require('express-handlebars');

app.engine('html', expressHbs({
	extname: 'html'
}));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/web');



var fs = require('fs');
var path = require('path');

console.log("path:", __dirname);
var rootPath = path.normalize(__dirname);

var modelPath = rootPath + '/models';
var configPath = rootPath + '/configs';
var routePath = rootPath + '/routes';

var modelPathFiles = fs.readdirSync(modelPath);
console.log(modelPathFiles);

modelPathFiles.forEach(function (file) {
	require(modelPath + '/' + file);
});



fs.readdirSync(configPath).forEach(function (file) {
	console.log(file);
	require(configPath + '/' + file)(passport);
	//    mongoose.connect(db);
	fs.readdirSync(routePath).forEach(function (file) {
		console.log(file);
		require(routePath + '/' + file)(app, passport);
	});

});

app.get('/ping', function (req, res) {
	res.send('pong');
});


app.listen(8000, function () {
	console.log("server is running on port 8080");
});
