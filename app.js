var express = require('express');
var app = express();
var path = require("path");

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//app.use(app.router);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// register dirnames 
app.use("/styles",  express.static(__dirname + '/public/stylesheets'));
app.use("/scripts", express.static(__dirname + '/public/javascripts'));
app.use("/images",  express.static(__dirname + '/public/images'));

// set port as specified number or 8080 for default
var port = process.env.port || 8080;

// redirect router to routes dir
var routes = require('./routes')(app);

app.listen(port);