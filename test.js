var PORT = 3000;

var http = require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    //console.log(realPath);
    var header = JSON.stringify(request.headers);
    console.log(header);
    response.writeHead(404, {
        'Content-Type': 'text/plain'
    });

    response.write("This request URL " + pathname + " was not found on this server.");
    response.end();
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
