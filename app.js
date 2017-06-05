var http = require('http');
var node_static = require('node-static');

// static files server
var static_directory = new node_static.Server(__dirname + "/docs");

// http server
var http_server = http.createServer();
http_server.addListener('request', function(req, res) {
    static_directory.serve(req, res);
});

http_server.listen(9999, '0.0.0.0');