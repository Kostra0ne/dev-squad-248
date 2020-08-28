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

const animals = [
  "cat",
  "dog",
  "hamster",
  "fish",
  "shark"
];


function modifier(word) {
  return word.toUpperCase();
}

// MAP RETURNS A BRAND NEW ARRAY EVERY SINGLE TIME
const fruitsToUpperCase = fruits.map(modifier);
const animalToUpperCase = animals.map(modifier);

console.log(fruitsToUpperCase);
console.log(animalToUpperCase);
// console.log(fruits); // not modified att all