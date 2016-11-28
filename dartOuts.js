
let singles =[];
let doubles = [];
let triples = [];
//adding all numbers except bulls to singles array
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
//adding bulls after creating triples array since it can be doubled but not tripled
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

console.log({"singles:":singles, "doubles: ":doubles, "triples: " :triples});
