let score = 33

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 33=> "33"
// 33abc => NaN
// true => 1; false => 0

let LoggedIn = 0
let booleanLoggedIn = Boolean(LoggedIn)
console.log(booleanLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Rushi" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
