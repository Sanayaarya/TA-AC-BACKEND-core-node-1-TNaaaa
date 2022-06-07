var http = require('http');

var server = http.createServer(handelSever);
function handelSever(req, res) {
  console.log(req.header,req.method,req.url);
  // res.end('Welcome');
}
server.listen(3000);