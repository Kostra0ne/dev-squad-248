// var let const

// you can start your variable names with :  a-zA-Z_$
// the prefered convetion for composed variable names user one
// user1, userOne (camelCase)
// kebab-case user-one
// PascalCase OneContructor

console.log("1 -> ", nameOrValuesBox);
var nameOrValuesBox = 121212;
console.log("2 -> ", nameOrValuesBox);

// var are hoisted !!!

try {
  console.log("3 -> ", letAreNotHoisted);
  let letAreNotHoisted = ":)";
  console.log("4 -> ", letAreNotHoisted);
} catch (err) {
  console.log(err);
}

if (true) {
  let heyhey = "i'm a dumb message";
  console.log(heyhey);
  heyhey = "yoooo";
  console.log(heyhey);
  // let are block scoped !!!
  // meaning they don't exist outside the block where they are defined
  // usefull memory optimisation
  // since there a thing, a program called the garbage collector in JS
  // this program runs as a background task
}

// console.log(heyhey); // this will crash !

// YOU CANT REASSIGN A VALUE TO A PREVIOUSLY DECLARED CONST
// YOU CANT REDECLARE (naming another variable) WITH A PREVIOSLY DECLARED CONSTANT
const titi = "toto";
const tutu = "tata";

console.log(titi, tutu);

// tutu = "tete"; // this will crash !
const PI = 3.14;
const myServerURL = "http://my-super-site.io/api/v1";

const ironhacker = {
  name: "Tatijana",
  wasTA: true,
  thing: "foo",
};

ironhacker.isCool = true;
delete ironhacker.thing;
ironhacker.name = "Franck"; // we call the "." the accessor => we access props => values
console.log(ironhacker);
console.log(" >>>> " , ironhacker.name === ironhacker["name"]);

// ironhacker = {}; // this will crash !

// const ironhacker = {} // this will crash !


var a, b = null, c, d = "toto";
let oo, pp, dd;
const a1 = "tot", b2 = 'toto', c2 = "sisi"; // this will crash
