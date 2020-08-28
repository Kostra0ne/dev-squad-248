const users = ["jill", "will", "bill", "jack", "tom", "john", "kim"]; // (l=5)
//      0         1       2       3      4      5       6

console.log(users);

console.log("------------");

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

console.log("------------");

for (let user of users) {
  console.log(user);
}

console.log("---- print the last value --------");

console.log(users[users.length - 1] === users[6]); // the right side of this comparaison is "hardcoded"

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}


// USEFULL ARRAY METHODS
const booleans = [true, false, false, true, false];
const users2 = ["jill", "bill", "kill", "will"];
// push
booleans.push(10 < 100);
// unshift
booleans.unshift(false);
console.log(booleans);
// shift // remove first index
booleans.shift();
// pop // remove last index
booleans.pop();

// slice
const users3 = users2;
// not copying the initial array => but referencing it

console.log(users3);
users2.splice(0, 2);

console.log(users3);

