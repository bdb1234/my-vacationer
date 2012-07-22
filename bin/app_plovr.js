var port = 1337;

goog.require('goog.string');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(goog.string.urlEncode('sooo cools!'));

}).listen(port, '127.0.0.1');

console.log('Server running locally on port ' + port);