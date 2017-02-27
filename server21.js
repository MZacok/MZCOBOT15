// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var MW = [];
var k = 0;


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.end('<html><body>MARTIN COME BACK!!! <script>alert("KURNIK A SLEPICE cekaji na KRALE MARTINA MZCOBOT15.");</script></body></html>');
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);



    // middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    //res.json({ message: 'hooray! welcome to our api!' }); 
Bear.find(function(err, bears) {
            if (err) 
                res.send("Tento.");
            res.send("Tento.");
        });  
});

router.route('/bears')

    

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        var i, t = "";
        for (i = 0; i < MW.length; i++) {
          t += ', ';
          t += MW[i];
        }
        res.send(t);
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        MW.shift();
	res.end(k+". tento");
    })

// create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
      MW.push(req.url+k);   
        k++;
      res.end(k+". tento");
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
