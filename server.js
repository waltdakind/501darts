const http = require('http');
const path = require('path');
const express = require('express');
const lookup = require('./lookup');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const morgan     = require('morgan');
let threeDartOuts =require('./threeDartOuts').threeDartOuts;
let twoDartOuts =require('./twoDartOuts').twoDartOuts;
//const mongoose   = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
// Define the port to run on
app.set('PORT', PORT);

//serve public folder
app.use(express.static(__dirname + '/public'));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Middleware activated! Power to the people!');
 
    next(); // make sure we go to the next routes and don't stop here
});

// on routes that end in /api/:num
// ----------------------------------------------------

router.get('/:num', function(req, res) {
	let lookupKey = 'key'+req.params.num;
	lookup.findOut(req.params.num);
    res.send({"Three Darts": threeDartOuts[lookupKey], "Two Darts": twoDartOuts[lookupKey]});
   
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
// ----------------------------------------------------
router.get('/', function(req, res) {
    res.json({ message: 'API call landed!' });   
});


// REGISTER API ROUTES -------------------------------
// all routes will be prefixed with /api
app.use('/api', router);

// Listen for requests
var server = app.listen(app.get('PORT'), function() {
  console.log('Dayummmm that PORT is sooooo...' + PORT);
  
});
