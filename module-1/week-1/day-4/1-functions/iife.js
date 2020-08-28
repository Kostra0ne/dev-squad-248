const myModule = (function jQuery() {
  // the legacy module pattern was built like that :)
  // IIFE : Immediatly Invoked Function Expression
  // plain simple explanation : a function that auto-run (auto-execute)
  // goal : code encapsulation + privacy
  // all the values declared in the iife (var, functions...) are private, non accessible from the outside world ... unless exposed (returned)

  var x, // this is a public variable"
    z = null; // private variables

  function chain() {
    return "i'm chaining stuff";
  }

  function search() {
    return "i'm searching stuff";
  }

  function myPrivateAction() {
    return "i'm staying put (in the 'module')";
  }

  return {
    // through  this return, i'm exposing the desired values : we can call this objet, this module's public API
    x,
    chain,
    search,
  };
})();

console.log(myModule);
console.log(myModule.chain());

// setInterval(() => {
//     console.log(myModule.search());
// }, 2000);

(function () {
  console.log("IM RUNNING FREEEEE");
})();
