var app = require('express').createServer(),
express = require('express'),
goog    = require('goog.string');

app.configure(function() {
  app.set('views', __dirname + '/views');
});

app.get('/', function(req, res){
  res.send(goog.string.toCamelCase('hey shivaaaa'));
});

app.listen(80);