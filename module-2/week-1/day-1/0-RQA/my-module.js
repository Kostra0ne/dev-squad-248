
// let's pretend you wrote a librairie (jQuery, momentjs ...) : a set of feature, functions, properties
// when you include this librairie on your page, you want it ton run directly
// <script src="./js/my-super-lib.js"></script>
// my-super-lib.js

var myLib = (function () {
  const myLibVersion = "0.0.0";
  const myPrivateInfos = "should stay put, within the lib ...";
  // this scope is REALLY private (can't be accessed from the 'outside world')
  function foo() {}
  function bar() {}
  function baz() {}

  return {
    // what is returned is "exposed" : accessible from the "outside world"
    foo,
    bar,
    myLibVersion,
  };
})(); // IIFE => Module => private scope that autoruns ...

console.log(myLib.baz);

// window.onload = startMyGame // => hey browser : wait for the full page load before running the associated callback

function foo2() {
  // inside of foo 2
}

foo2();

(function foo3() {
  // inside of foo 3
})();

// nowadays, you need less IIFE's in your code since we have the module type (in browser)
// in node (server side) each file is considred as a module by default
