var x = "I am X (var) and i'm global";
let y = "I am Y (let) and i'm local";
const z = "I am Z (const) and i'm local too";

console.log(x);
console.log(y);
console.log(z);

const module = (function (params) { // IIFE
  var xx = "i am XX (var) and i'm local to the IIFE";
  console.log(xx);
})();
