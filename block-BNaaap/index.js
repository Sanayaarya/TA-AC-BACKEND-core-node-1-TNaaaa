var http = require('http');

var server = http.createServer(handelSever);
function handleRequest(req,res){
  res.statusCode = 201;
  res.setHeader('content-Type' , 'text/html');
}

server.listen(3000); 