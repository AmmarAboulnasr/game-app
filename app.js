'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/game-app');

app.set('views', 'templates');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', function(req, res) {
  res.render('index');
});

app.use(function(req, res) {
  res.status(404).render('404');
});

app.listen(PORT , function() {
  console.log('Listening on port: ', PORT);
});