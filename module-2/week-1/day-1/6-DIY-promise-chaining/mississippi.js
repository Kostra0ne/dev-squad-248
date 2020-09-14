// launch the program with nodemon
// modify the provided code to ...
// chain 3 functions, each returning a Promise !
// each Promise triggers after a certain timeout (respectively 1000ms, 2000ms and 3000ms).
// ----------------------------------
// expected output :
// "One Mississippi !";
// "then ... Two Mississippis !!"
// "then ... Three Mississippis !!!"

function oneMississippi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1 Mississippi !");
    }, 1000);
  });
}

function twoMississippis() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 Mississippis !!");
    }, 2000);
  });
}

function threeMississippis() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3 Mississippis !!!");
    }, 3000);
  });
}

oneMississippi().then((msg1) => {
  console.log(msg1);

  twoMississippis().then((msg2) => {
    console.log(msg2);

    threeMississippis().then((msg3) => {
      console.log(msg3);
    });
  });
});

// function oneMississippi(clbk) {
//   setTimeout(() => {
//     console.log("1 Mississippi !");
//     clbk();
//   }, 1000);
// }

// function twoMississippis(clbk) {
//   setTimeout(() => {
//     console.log("2 Mississippis !!");
//     clbk();
//   }, 1000);
// }

// function threeMississippis() {
//   setTimeout(() => {
//     console.log("3 Mississippis !!!");
//   }, 1000);
// }

// oneMississippi(() => twoMississippis(() => threeMississippis()))