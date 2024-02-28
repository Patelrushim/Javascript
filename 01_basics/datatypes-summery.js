// Primitive 

//7 types  : String,  Number, Boolean, Null, undefind, Symbol, BigInt

const score = 100
const scoreValue  = 100.33
const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//const bigNumber = 1234724887687n


// Referance (Non primitive)

// Array, Obljects, Functions

const heros =["badman", "ironman"];
let myObj  ={ 
    name: "Rushi",
    age: 19
}

const myFunction = function(){
    console.log("Hello WOrld!");
}

console.log(typeof heros );