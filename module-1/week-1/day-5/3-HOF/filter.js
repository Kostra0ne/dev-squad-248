const fruits = [
  "apple",
  "mango",
  "pear",
  "peach",
  "banana",
  "litchee",
  "mango",
  "mango",
  "pear",
];

// i want to keep only mangos and pears
// function filterFruits(list) {
//   const tmp = [];
//   for (let i = 0; i < list.length; i++) {
//     const currentFruit = list[i];
//     if (currentFruit === "mango" || currentFruit === "pear") tmp.push(list[i]);
//   }
//   return tmp;
// }

// const filteredFruits = filterFruits(fruits);

// console.log("--------------");
// console.log(filteredFruits);

// HOF !!!!
// filter will return ultimatly a brand new array filled with the kept values
const filteredFruits2 = fruits.filter(
  (fruit) => fruit === "mango" || fruit === "pear"
);

console.log("--------------");
console.log(filteredFruits2);

function keepOnlySomeFruits(fruit) {
  // the filter's callback MUST return true OR false
  // if returning true, the current value will be kept
  if (fruit === "mango" || fruit === "pear") return true;
}

const filteredFruits3 = fruits.filter(keepOnlySomeFruits);

console.log("--------------");
console.log(filteredFruits3);

console.log("--------------");

const users = ["Solomon", "Jill", "Joe", "Jack", "Sam"];

const usersStartingWithJ = users.filter(function (user) {
  if (user.startsWith("J") === true) return true;
});

const usersStartingWithS = users.filter(user => user.startsWith("S"))

console.log(usersStartingWithS);
