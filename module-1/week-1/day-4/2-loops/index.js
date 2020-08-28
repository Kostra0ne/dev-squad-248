// while
var score = 0;
while (score <= 10) {
  // when the condition is false, the loop stops
  // something is truthy ...
  // ... loop and perform actions
  // and ALWAYS provide an escape condition (a way to exit the loop)
  console.log(`score is now ${score}`);
  score += 2; // increments score by 2
}

console.log("...proceed");
score = 0;
// do while

do {
  // the code inside the do statement will run at least one time
  console.log(`score is now ${score}`);
  score += 1; // increments score by 2
} while (score <= 10);

console.log("...proceed");
score = 11;

// for
var string = "hello world";
var users = ["jill", "bill", "will"];

function parseSequence(sequence) {
  console.log("--------------");
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === "w") break;
    console.log(`${i} -> ${sequence[i]}`);
  }
}

parseSequence(string);
parseSequence(users);

// for in => usefull to parse object's literal key/value pairs...
const cat = {
  name: "Fugee",
  age: 1,
  colors: ["white", "gray", "brown"],
  eyeColor: "blue",
  race: "Siamese",
  isCute: true,
  isAPain: true,
};

const cat2 = {
  name: "Kitty",
  age: 10,
  colors: ["block"],
  eyeColor: "yellow",
  race: "street",
  isCute: false,
  isAPain: false,
};

// console.log("--------------");
// console.log(cat);
// console.log(
//   `${cat.name} is a cat, it's ${cat.age} years old, it has ${cat.eyeColor} eyes`
// );

// for (let index = 0; index < cat.colors.length; index++) {
//   console.log(cat.colors[index]);
// }

// console.log(cat.name === cat["name"], cat["name"], cat.name);

const cats = [cat, cat2];
const catNames = [];

for (let i = 0; i < cats.length; i++) {
  for (let key in cats[i]) {
    if (key === "name") catNames.push(cats[i][key]);
  }
}

console.log(catNames);

// for of (works on every Iterable object (Array, Map, Iterators...))
const numbers = [1, 22, 55, -1000, 0];

for (let nb of numbers) {
  console.log(nb);
}
