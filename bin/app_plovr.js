var app = require('express').createServer();

goog.require('vacationer.home.Frame');

app.get('/', function(req, res){
    var testComponent = new vacationer.home.Frame();
    res.send(testComponent.render());
});

app.get('/test', function(req, res){
    var testComponent = new vacationer.home.Frame();
    res.send(testComponent.render());
});

app.listen(3000);