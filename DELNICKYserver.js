var http = require('http');
var request = require('request');
console.log('Nacteni konfigurace, databaze, lokalizace ap.');
http.createServer(function (req, res) {
  console.log('Zpracovani pozadavku z URL: ' + req.url);
  if (req.url === "/DILO") {
    res.end("<div>TOTO JE DIV SVETA</div>");
  }
}).listen(1337);
