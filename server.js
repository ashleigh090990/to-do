var http = require('http');

var express = require('express');
 
var server = express();
server.use(express.static(__dirname + '/'));
 
var port = 5000;
server.listen(process.env.PORT || port);