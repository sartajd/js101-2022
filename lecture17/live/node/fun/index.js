const all = require("everyday-fun");
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(all.getRandomJoke().body);
}).listen(8080);

