function foo(x) {
  console.log("im foo-ed");
  if (x !== 10) return foo(++x);
  return "bar";
}

foo(0); // "max call stack" error

// run the next one only in browser context ...
// var frameId;

// function draw() {
// console.log("i'm draw");
//   frameId = requestAnimationFrame(draw);
// }

// frameId = requestAnimationFrame(draw);
