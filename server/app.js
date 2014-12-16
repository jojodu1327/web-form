'use strict';
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/environment');

mongoose.connect(config.mongo.url);

require('./config/routes')(app);

app.listen (config.port);

console.log('Server is running');

module.exports = app;