
// array to include all spots on the board sans multiplier
let singles =[];
// array of values on the outer ring of the board plus the double bullseye
let doubles = [];
// values of targets on inner ring midway between doubles ring and bullseye
let triples = [];

//last dart options this will be either a copy of the doubles array or doubles and triples
// concatenated plus single bulls for "Master Out" option

// this will be either an array of arrays, or a single array
let outsToShow = [];

//adding all numbers except bullseye to singles array
for(let i=1; i<21; i++){
	singles.push(i);
}
//triples where one dart can be an out (master out variation only)
let tripleOuts = (arr) => {
	singles.map(tripling); 
}

// tripling function
let tripling = (num) =>{
triples.push(num*3);
} 

// create triples array
tripleOuts(singles);
//adding bullseye after creating triples array since it can be doubled but not tripled
singles.push(25);
//singles array can now be used as outs when there is no double out

// doubling function
     let doubling = (num) =>{
     doubles.push(num*2);
} 
//  possible double out numbers
let doubleOuts = (arr) => {
     singles.map(doubling); 
}
doubleOuts(singles);
//console.log({"singles:":singles, "doubles: ":doubles, "triples: " :triples});

// single array of all possible targets for use with map function
let allTargets = [...singles, ...doubles, ...triples];
//console.log(allTargets);

// find out function  
//TO DO don't just calculate out -- show best options as recommended
// (first we'' use calculations to show all possibilities and filter out duplicate combinations)


let findOut = (num) => {


}

// step 1
// for numbers 170 - 136 most outs use T20 and all require at least a T17
// 164 154 146 -- a triple 19 is a viable option
// 
// 3 Dart out shots 135 - 101 
//
// 3 Dart out shots 80 - 61

//
let getToAnOut = (num) => {
switch(num) {
    case num>180:
        console.log("No outs available over 180.");
        break;
    case num=180:
    //triple out only
        outsToShow.push(["T20", "T20", "T20"]);
        console.log(outsToShow);
        break;
    case (num>171 && num<180):

    // first push T20 to outsToShow and test for T19, T18, T17
//171 is 3 x T19
//triple out only
    case (num=171):
        outsToShow.push(["T19", "T19", "T19"],["T20", "T19", "T18"]);
        console.log(outsToShow);
        break;
    case (num>135 && num<171):
//164 -- T20 - T18 - D25

outsToShow.push(["T20"];
        console.log(outsToShow);
        break;
    case (num>100 && num<136):
        console.log();
        break;
    default:
        console.log();
}
}
