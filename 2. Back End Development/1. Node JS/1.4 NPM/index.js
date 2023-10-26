// var generateName = require("sillyname");    require is used in cjs
import generateName from "sillyname";
var sillyname = generateName();
console.log("My name is " + sillyname + ".");

import superheroes from "superheroes";
var superHero = superheroes.random();
console.log("I am " + superHero + "!");
