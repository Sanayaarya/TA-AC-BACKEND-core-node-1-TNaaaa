var http = require('http');
var fs = require('fs');
const req = require('express/lib/request');
const res = require('express/lib/response');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if(req.method === 'GET' &&  req.url==='/file'){
    fs.readFile('./node.html',(err,content)=>{
      if(err) console.log(err);
      res.setHeader('content-type','text/html')
      res.end(content);
    })
  }


if(req.method === 'GET' && req.url === '/stream'){
  res.setHeader('content-type','text/html');
  fs.createReadStream('./node.html').pipe(res);
}

}
server.listen(5555, () => {
  console.log(`sever listener on port 5.5k`);
});