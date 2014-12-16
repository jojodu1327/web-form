'use strict';

var morgan = require('morgan');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var expressValidator = require('express-validator');
var config = require('./environment');
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

module.exports = function (app){

  require('./passport')(passport); 
  
  app.use(morgan('dev'));
  app.use(cookieParser());
  

  if(config.env === 'development'){
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(__dirname, '..', '..', '.tmp')));
  }

  app.use(express.static(config.static));

  app.use(bodyParser.urlencoded({ extended :false }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(expressValidator({
    customValidators: {
      isObjectId: function(value) {
        return mongoose.Types.ObjectId.isValid(value);
      }
    }
  }));

  app.use(session({ secret: 'shhtitsasecret' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  app.get('/sample', function (req, res){
    res.json('This is a sample');
  });

 // app.get('/index', function(req, res){
//res.sendfile(config.static + '/app/user/index.html');
//  });

//app.get('/login', function(req, res){
//	res.sendfile(config.static +'/app/user/login.html');
//});

//app.get('/signup', function(req, res){
//	res.sendfile(config.static +'/app/user/signup.html');
//});

app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/index', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

  app.use('/api/users', require('../api/user'));


  app.get('/*', function (req, res){
    res.sendfile(config.static + '/app/user/index.html');
  });
}
