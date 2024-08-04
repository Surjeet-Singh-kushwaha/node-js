const http = require("http")
http.createServer((req,res)=>{
res.write("Hello Surjeet")
return res.end()
}).listen(8081)
// var http = require('http');
// let fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile("index.html", function (err, data) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data)
//     return res.end();
//   })
// 
// }).listen(8080);