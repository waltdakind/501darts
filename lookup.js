let fs = require('fs');

// for testing from prompt
let arg = process.argv[2];
let threeDartOuts =require('./threeDartOuts').threeDartOuts;
let twoDartOuts =require('./twoDartOuts').twoDartOuts;

let findOut = (num) => {
let lookupKey ='key'+num;

if (threeDartOuts[lookupKey] !== undefined){
console.log(`Three darts to throw: ${threeDartOuts[lookupKey]}`);

}

if (twoDartOuts[lookupKey] !== undefined){
console.log(`Two darts to throw: ${twoDartOuts[lookupKey]}`);

}
}

//findOut(arg);

module.exports.findOut = findOut;