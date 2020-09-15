function foo(callback, time) {
  setTimeout(callback, time);
}

function bar() {
  console.log("i'm bar !!!!");
}

function baz() {
  console.log("i'm baz !!!!");
}

// foo(bar()); // if you o this, you are NOT passing bar as a callback
// foo(undefined)

foo(bar, 2000); // if you want to use a callback function, you simply need to pass it as a argument to another function

foo(baz, 1000);

// function handleClick() {
//   console.log("clicked !!!");
// }

// document.getElementById("my-btn").addEventListener("click", handleClick);

// // document.getElementById("my-btn").onclick = handleClick;

// window.onload = function () {
//   console.log("browser page is fully loaded !!!");
// };
