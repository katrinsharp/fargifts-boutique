
'use strict';

var express = require('express');
var http = require('http');
var logger = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();
app.use(favicon(__dirname + '/dist/favicon.ico'));
app.use(logger());
app.use(express.static(path.join(path.normalize(__dirname), 'dist')));
var server = http.createServer(app);
server.listen(process.env.PORT || 5000);
