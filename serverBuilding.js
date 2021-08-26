// const http= require('http');

// const server = http.createServer(function(req, res){
    
//     res.setHeader('content-type', 'application/json');
//     res.setHeader('Access-Control-Allow-Origin','*')
//     res.writeHead(200);

//     let dataObj = {"id":123,"name":"Ahsun", "email":"Ahsun@work.org"}
//     let data = JSON.stringify(dataObj);
//     res.end(data);

// });

// server.listen(1234, function(){
//     console.log('listening on port 1234');
// })


// server.js

var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello world\n");
});

server.listen(3000, function() {
    console.log('Server is running at 3000')
});

