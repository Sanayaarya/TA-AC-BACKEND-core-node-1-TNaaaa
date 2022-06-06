var url = require('url');
var parsedurl = urlparse(" `https://airindia.com/fares/calculate?from=delhi&to=detroit`")

console.log(parsedurl.query)
console.log(parsedUrl.protocol,parsedUrl.pathname)