function oneMississippi() {
  // "One Mississippi !";
}

function twoMississippi() {
  // "Two Mississippis !!";
}

function threeMississippi() {
  // "Three Mississippis !!!";
}

// launch the program with nodemon
// modify the provided code to ...
// chain 3 functions, each returning a Promise !
// each Promise triggers after a certain timeout (respectively 1000ms, 2000ms and 3000ms).
// ----------------------------------
// expected output :
// "One Mississippi !";
// "then ... Two Mississippis !!"
// "then ... Three Mississippis !!!"


oneMississippi().then((msg1) => {
  console.log(msg1);

  twoMississippis().then((msg2) => {
    console.log(msg2);

    threeMississippis().then((msg3) => {
      console.log(msg3);
    });
  });
});
