// Initializing prompt
const prompt = require("prompt-sync")();

//First take input using promt and store it to a variable.
var name1 = prompt("Enter your name : ");
// Input crush name
var name2 = prompt("Enter your Crush name : ");

var random = Math.random();
random = random * 100;
random = Math.round(random);
console.log("Your love chance is " + random + "%");
