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
const PORT = process.env.PORT || 3000;
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
	let target = req.params.num;
	let lookupKey = 'key'+ target;
	let three = threeDartOuts[lookupKey];
	let two = twoDartOuts[lookupKey];
	if(target>170 || target<61){
	outs.push("<p> Pick a number within range (61-170) please.</p>");	
	}
	// Bogey No’s – 169, 168, 166,165, 163,162 & 159
	else if (target== 169|| target== 168|| target== 166|| target==165 || target==163 || target==162 || target ==159){
	outs.push("<p> Unfortunately that is a bogey number. No three dart combo exists.</p>");	
	}
	else{
		outs.push("<p> With Three Darts</p>");
	    outs.push(three);
	if(req.params.num<110){
		outs.push("<p> With Two Darts</p>");
		outs.push(two);
	}
	lookup.findOut(req.params.num);	
	}

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
