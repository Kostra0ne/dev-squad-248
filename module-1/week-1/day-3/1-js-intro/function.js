// 1 function declaration
function sayHello() {
  console.log("hello !");
}

function sayHelloBetter() {
  return "hello !";
}

function sayHelloEvenBetter(who) {
  return "hello " + who + " !";
}

function log(v) {
  console.log(v);
}

// log(sayHelloBetter());

console.log(sayHelloBetter());

console.log(sayHelloEvenBetter("Max"));
console.log(sayHelloEvenBetter("Ailie"));

const user1Greeted = sayHelloEvenBetter("Laura");
// more or less complex actions here with my value ....
console.log(user1Greeted);

const usersGreeted = [
  sayHelloEvenBetter("Raphaelle"),
  sayHelloEvenBetter("Tatiana"),
];

console.log(usersGreeted);

function foo() {
  return 42;
}

console.log(typeof foo());

var score = 0;

if (foo()) {
  score += 10;
} else {
  score -= 10;
}

console.log(score);
