var users = ["jill", "kill", "bill", "gui"];

// console.log(Array.prototype.forEach)

// console.log(users.forEach === Array.prototype.forEach)

console.log("----------------");

function loopThroughArray(value, index, arr) {
  console.log(value);
}

const loopThroughArray2 = value => console.log(value);

users.forEach(loopThroughArray);

console.log("----------------");

users.forEach(function (user, index, arr) {
  console.log(user, index, arr);
});

console.log("----------------");

users.forEach(v => console.log(v));

// BONUS 

// Array.prototype.myForeach = function (callback) {
//   console.log(callback);
//   console.log(this);
//   for (let index = 0; index < this.length; index++) {
//     callback(this[index]);
//   }
// };

// users.myForeach(loopThroughArray);
