const fruits = ["pear", "peach", "apple", "orange"];

const player = {
  score: 0,
  name: "Luigi",
};

for (let f of fruits) {
  console.log(f);
}

console.log("-------");

for (key in player) {
  console.log(key); // the key ^^
  console.log(player[key]); // the value associated to each key
}


