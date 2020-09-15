var myLib = function () {
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
  }; // IIFE => Module => private scope that autoruns ...



const myLibReady = myLib();
  