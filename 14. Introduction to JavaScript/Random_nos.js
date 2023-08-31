// To Generate Random numbers we use "random()" func. and this func is come inside Math library.

var n = Math.random();
console.log(n);

// Now this function only generates no. between 0 - 0.9999999999999999 (16 decimal places)

// So it we want to generates bigger random numbers for eg. die numbers, then we multiply by 6 and use floor func.
var x = Math.random();
x = x * 6;
x = Math.floor(x);
console.log(x);
