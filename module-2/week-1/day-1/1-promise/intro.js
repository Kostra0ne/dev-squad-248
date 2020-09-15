// PROMISES ARE HERE TO DEAL WITH TIMING PROBLEMS (ASYNC)
// PROMISES WON'T REPLACE CALLBACKS, since they are callback driven
// ultimately they make async code more readable, especialy when combined with async/await decorators

// the Promise takes a MANDATORY argument (a callback function)
// this callbacl takes 2 arguments (resolver, rejecter) : 2 callback functions

const myFirstPromise = new Promise((resolve, reject) => {
  console.log("resolver : ", typeof resolve);
  console.log("rejecter : ", typeof reject);

  const randomNumber = Math.random(); // will be a number between 0 and 1;

  setTimeout(() => {
    if (randomNumber < 0.5) {
      // if randomNumber is less than 0.5 : the promise fails
      reject("oh no... i don't get it !!!!");
    } else {
      // else : the promise succeeds
      resolve("welcome to emotional rollercoaster : part 2 !!!");
    }
  }, 2000); // promises deal with asynchronicity
  // async can be a lot of things : waiting for an event, 
  // waiting for a server response, 
  // waiting for a database operation, 
  // waiting for a long serie of computing process (like large file reading .... )
});

console.log(myFirstPromise); // the promise is pending ... waiting for resolution OR rejection

myFirstPromise
  .then((success) => {
    // if the promise is resolved (successfull) you'll end up in the "then" callback
    console.log(success);
  })
  .catch((error) => {
    // else if the promise is rejected (failed) you'll end up in the "catch" callback
    console.log(error);
  });

// const myFirstPromiseWrong = new Promise(() => {

// });

// const myFirstPromiseWrong = new Promise(function() {

// });

// console.log(myFirstPromiseWrong); // it's waiting for a resolution ...
