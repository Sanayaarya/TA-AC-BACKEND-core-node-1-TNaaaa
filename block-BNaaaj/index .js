console.log('Welcome to NOde.js');
var os = require('os');
var freeM = os.freemem();
var cups = os.cpus().length;
var uptime = os.uptime();
console.log(freeM, cpus,uptime);


var fs = require('fs');

var {readFile, readFileSync, unLike}= require('fs');
readFileSync('./app.js')

var sync = readFileSync('./app.js');
readFile('./app.js',(err,content)=>{
  console.log(err, content)
})
 

// readFiles.readFile('', 'utf8', (err, content) => {
//   console.log(content);
// });

// console.log('non-blocking First');
// setTimeout(() => {
//   console.log('non-blocking middle');
// }, 2000);
// console.log('last');
// var { readFile, readFileSync, unlike, fstat } = require('fs');
// var sync = readFileSync('./app.js');