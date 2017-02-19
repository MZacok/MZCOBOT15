var http = require('http');
var request = require('request');
console.log('Nacteni konfigurace, databaze, lokalizace ap.');
http.createServer(function (req, res) {
  console.log('Zpracovani pozadavku z URL: ' + req.url);
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      res.end(body); 
    }
  })
}).listen(1337);
