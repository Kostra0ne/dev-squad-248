console.log("start");
var foo = 5000;

setTimeout(() => {
  console.log("talking from the past");
}, foo); // express in ms

console.log("end");
