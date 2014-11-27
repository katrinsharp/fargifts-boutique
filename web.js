
'use strict';

var express = require('express');
var http = require('http');
var logger = require('morgan');
var path = require('path');
var app = express();
app.use(logger());
app.use(express.static(path.join(path.normalize(__dirname), 'dist')));
var server = http.createServer(app);
server.listen(process.env.PORT || 5000);
