var http = require('http');
var request = require('request');
var bodyParser = require('body-parser');
console.log('Nacteni konfigurace, databaze, lokalizace ap.');
http.createServer(function (req, res) {
  console.log('Zpracovani pozadavku z URL: ' + req.url);
  res.end('body.name ' + req.params.page);
}).listen(1337);
