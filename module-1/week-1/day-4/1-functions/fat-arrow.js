// const sayHello = function (who) {
//   return `Hello ${ who } !!!`; // interpolate the value in the string
// };

// FAT ARROW FUNCTIONS

// const sayHello = (who) => {
//   return `Hello ${who} !!!`; // ... meaning runs
// };

const sayHello = (who) => `Hello ${who} !!!`; // without the curly brackets AND the return statement, the fat arrow will return the first instruction.

console.log(sayHello("everybody"));

const xx = () => {
  // do stuff here...
  return "whatever";
};

// const xxx = (what) => { return `whatever ${what}` };
const xxx = (what) => `whatever ${what}`;

console.log(xxx("man"));
console.log(xxx("ladies"));
console.log(xxx("hackers"));

const res = xxx("coders");

const substract = (a, b) => {
  if (isNaN(a) || isNaN(b)) throw new Error("a AND be must be of type Number");
  // this func is anonymous (no name attached)
  return a * b;
};

substract(100, 2000);
