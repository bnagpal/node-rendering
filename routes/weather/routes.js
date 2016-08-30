
var express = require('express'),
    server = express(),
    handlers = require('./handlers.js');

server.get('/:location', handlers.location);
server.post('/forecast', handlers.forecast);
server.get('/', function(req, res) {
    res.redirect('/');
});

module.exports = server;