var express = require('express')
var app = express()

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

var http = require('http');
var request = require('request');
console.log('Nacteni konfigurace, databaze, lokalizace ap.');
http.createServer(function (req, res) {
  console.log('Zpracovani pozadavku z URL: ' + req.url);
  if (req.url === "/DILO") {
    res.end("<div>TOTO JE DIV SVETA</div>");
  } else {
    res.end("SSjed");
  }
}).listen(1337);
