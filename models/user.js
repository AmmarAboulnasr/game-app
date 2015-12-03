'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User;

var userSchema = Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.statics.login = function(user, cb) {
  User.findOne({ username: user.username }, function(err, foundUser) {
    if(err || !foundUser) return cb(err || 'Incorrect username or password');
    if(user.password !== foundUser.password) return cb('Incorrect username or password');
    foundUser.password = null;
    return cb(err, foundUser);
    });
};

userSchema.statics.register = function(user, cb) {
  User.findOne({ username: user.username }, function(err, foundUser) {
    if(err || foundUser) return cb(err || 'Username already taken');
    var newUser = new User();
    newUser.username = user.username;
    newUser.password = user.password;
    newUser.save(function(err, savedUser) {
      savedUser.password = null;
      return cb(err, savedUser);
    });
  });
};

User = mongoose.model('User', userSchema);

module.exports = User;