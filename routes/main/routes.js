
var express = require('express'),
    server = express(),
    handlers = require('./handlers.js');

server.get('/', handlers.index);

module.exports = server;