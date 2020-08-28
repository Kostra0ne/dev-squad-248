// 0 - global scope
// 1 - block scope

const user = {
  name: "Billy",
  lastname: "Bats",
  age: 23,
};

if (user.age > 18) {
  imHoisted = true;
  let partyOn = true; // less error prone (in general)
  const isAdult = true;
  console.log(isAdult, partyOn, imHoisted);
}

// console.log(imHoisted);
// console.log(isAdult, partyOn);

// 2 - function scope

function tellMeWhat() {
  // vars declared inside a function are function scoped
  var aStory = "once upon a time...";
  var aJocke = "do you know the difference between...";
  const isARealStory = false;
  let isFunny = true;

  //   function decideIfITellAJockeOrNot() {
  //     return Math.random() > 0.5;
  //   }

  const decideIfITellAJockeOrNot = () => Math.random() > 0.5;

  if (decideIfITellAJockeOrNot()) return aJocke;
  else return aStory;
}

// function understandShadowing() {}

console.log(tellMeWhat());

// ------------------
// 3 - shadowing

var hello = "hola";

function a() {
  var salut = "Bonjour";

  function aa() {
    function aaa() {
      var salut = "Quoi de neuf ?"; // shadowing
      console.log(salut);
    }
    aaa();
  }

  aa();
  console.log(salut);
}

function b() {
  var guttenTag = "Hallo";
  console.log(hello, guttenTag);
}

// console.log(salut, guttenTag);

a();
// b();
