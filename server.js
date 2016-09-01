
var path = require('path'),
    express = require('express'),
    server = express(),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mustache = require('mustache-express'),
    mainRoute = require('./routes/main/routes'),
    weatherRoute = require('./routes/weather/routes'),
    bhawnaRoute=require('./routes/bhawna/routes'),
    timeRoute=require('./routes/time/routes'),
    tvSeriesRoute=require('./routes/tvSeries/routes');

server.listen(3000);

// USE PARSING MIDDLEWARE
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());

// SETUP VIEW ENGINE
server.engine('mustache', mustache());
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));

// SPECIFY STATIC ROUTE
express.static(path.join(__dirname, 'assets'));

// SPECIFY ROUTES MODULE
server.use('/', mainRoute);
server.use('/weather', weatherRoute);
server.use('/bhawna', bhawnaRoute);
server.use('/time',timeRoute);
server.use('/tvSeries',tvSeriesRoute);

// EXPORT SERVER SETUP
module.exports = server;
