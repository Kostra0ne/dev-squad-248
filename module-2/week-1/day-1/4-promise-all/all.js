const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => reject("oh no ! at leaast one promise didn't make it !!! "), 3000);
  setTimeout(() => resolve("i'm the promise 1"), 1);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("i'm the promise 2"), 10000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("i'm the promise 3"), 5000);
});

// p1.then((res) => console.log(res));

// p2.then((res) => console.log(res));

// p3.then((res) => console.log(res));

// PROMISE ALL is usefull if you wan't to wait for several
// async process to complete (resolve) before doing the next action
Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("--------");
    console.log(results);
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch((err) => {
    console.log(err);
  });

// IF ONE PROMISE FAILS FOR SOME REASON ... the catch of Promise.all will be triggerd

// => all promises MUST be successfull when using promise.all
