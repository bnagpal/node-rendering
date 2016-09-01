
var express = require('express'),
    server = express(),
    handlers = require('./handlers.js');

server.get('/:tvSeriesName', handlers.seriesName);
server.post('/tvSeriesDetails', handlers.tvSeriesDetails);
server.get('/', function(req, res) {
    res.redirect('/');
});

module.exports = server;
