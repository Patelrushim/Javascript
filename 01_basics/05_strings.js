const name = "Rushi";
let carNumber = 24;
console.log(
  `Hello my name is ${name} and i have the ${carNumber} cars in garage.`
);

const gameName = new String("rushi-patel");
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);

console.log(anotherString);

const newStringOne = "   Rushi   ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rushi.com/rushi%20patel";

console.log(url.replace("%20", "-"));

console.log(url.includes("rushi"));

console.log(gameName.split("-"));
