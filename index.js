var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    const files = [
        '/',
        '/about',
        '/contact-me'
    ];
    var fileName = './404.html';
    if (files.includes(q.pathname)) {
        fileName = q.pathname === '/' ? './index.html' : "." + q.pathname + '.html';
    }

    fs.readFile(fileName, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 not FOUND");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);