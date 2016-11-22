var express = require('express'); //Imports express into my application
var http = require('http');

var  app = express(); //I call on express` createServer() called app
var port = process.env.NODE_ENV || 8280;
var colors = require('colors');
var swig = require('swig');

// view engine config
app.engine('html', swig.renderFile);

app.set('view engine', 'html');

//this is our route
app.get('/', function(req, res){
    res.send('This is my first Express Application');
});

var server = http.createServer(app);


server.listen(port);
console.log('Express server started on port  '.green + port);
