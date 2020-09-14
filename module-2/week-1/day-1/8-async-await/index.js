function asyncAction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("async 1 action is done !!!");
    }, 1000);
  });
}

function asyncAction2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("async 2 action is done !!!");
    }, 1000);
  });
}

function asyncAction3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("oh oh ! an error occured !!!");
    }, 1000);
  });
}

// the async keyword allow you to run async code in a more "synchro,ous fashion"
(async function () {
  try {
    // let's try to perform the following actions (asynchronous)
    // await must be called on a function returning a Promise ...
    const result = await asyncAction(); // this blocks until promise is resolved
    console.log(result); // then print the result
    const result2 = await asyncAction2(); // this blocks until second promise is resolved
    console.log(result2); // then print the result
    const result3 = await asyncAction3(); // this action is rejected ... goto the catch block below
    console.log(result3);
  } catch (err) {
    console.error(err); // rejected... then print the error
  }
})();
