'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/register', function(req, res) {
  User.register(req.body, function(err, user) {
    res.status(err? 400 : 200).send(err || user);
  });
});

router.post('/login', function(req, res) {
  User.login(req.body, function(err, user) {
    res.status(err? 400 : 200).send(err || user);
  });
});

module.exports = router;