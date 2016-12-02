//==========================================================================
// dart outs data and lookup function for logging
//==========================================================================
const lookup = require('./lookup');
const threeDartOuts =require('./threeDartOuts').threeDartOuts;
const twoDartOuts =require('./twoDartOuts').twoDartOuts;
//==========================================================================
// express routing stuff / standard RESTful requirements
//==========================================================================
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan     = require('morgan');
//==========================================================================
// DB stuff (if needed later)
//==========================================================================
//const mongoose   = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
// =============================================================================

// Define the port to run on
// =============================================================================
const PORT = process.env.PORT || 8080;
app.set('PORT', PORT);

//serve public folder
app.use(express.static(__dirname + '/public'));
//==============================================================================
// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use((req, res, next) => {
    // do logging
    console.log('======================================================');
    console.log('======================NEW QUERY=======================');
    console.log('======================================================');
    next(); // make sure we go to the next routes and don't stop here
});
// =============================================================================
// on routes that end in /api/:num
// =============================================================================
router.get('/:num', (req, res) => {
	let outs = [];
	let lookupKey = 'key'+req.params.num;
	let three = threeDartOuts[lookupKey];
	let two = twoDartOuts[lookupKey];
	outs.push("<p> With Three Darts</p>");
	outs.push(three);
	outs.push("<p> With Two Darts</p>");
	outs.push(two);
	lookup.findOut(req.params.num);
    res.send(outs);
   
});
// =============================================================================
// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
// =============================================================================
router.get('/', (req, res) =>  {
    res.json({ message: 'API call landed!' });   
});

// REGISTER API ROUTES -------------------------------
// all routes will be prefixed with /api
// =============================================================================
app.use('/api', router);

// =============================================================================
// Listen for requests
// =============================================================================
const server = app.listen(app.get('PORT'), () => {
  console.log('So, I guess you wanted to run your app on port ' + PORT);
});
