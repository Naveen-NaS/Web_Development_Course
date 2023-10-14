// Initializing prompt
const prompt = require("prompt-sync")();

// Main code
var n = prompt("Enter the elements in Series : ");
console.log(getFibonacciSeries(n)); // Calling the Fuction

// Declaring function
function getFibonacciSeries(n) {
  var fseries = [];

  if (n === 1) {
    fseries = [0];
  } else if (n === 2) {
    fseries = [0, 1];
  } else {
    fseries = [0, 1];

    var prev = 0;
    var next = 1;

    for (var i = 2; i < n; i++) {
      var sum = prev + next;
      fseries.push(sum);

      // Updating prev & next
      prev = next;
      next = sum;
    }
  }

  return fseries;
}
