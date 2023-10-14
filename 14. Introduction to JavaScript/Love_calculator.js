// Initializing prompt
const prompt = require("prompt-sync")();

//First take input using promt and store it to a variable.
var name1 = prompt("Enter your name : ");
// Input crush name
var name2 = prompt("Enter your Partner name : ");

var random = Math.random();
random = random * 100;
random = Math.round(random);

if (random > 70) {
  console.log(
    "Your love chance is " + random + "%" + ". You really need to get married."
  );
} else {
  console.log(
    "Your love chance is " +
      random +
      "%" +
      ". You need to enhance your relationship."
  );
}
