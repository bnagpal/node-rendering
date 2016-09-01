
var express = require('express'),
    server = express(),
    handlers = require('./handlers.js');

server.get('/', handlers.time);

module.exports = server;
