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
