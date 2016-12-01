let fs = require('fs');

let threeDartOuts =require('./threeDartOuts').threeDartOuts;
let twoDartOuts =require('./twoDartOuts').twoDartOuts;

let findOut = (num) => {
let lookupKey ='key'+num;
console.log(threeDartOuts[lookupKey]);
console.log(twoDartOuts[num]);
}




findOut(61);
