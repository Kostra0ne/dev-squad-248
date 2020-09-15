// ------------------------------------------
// Use async/await to clean this program !!!
// ------------------------------------------
// ------------------------------------------
// launch the program with nodemon
// modify the provided code to ...
// chain 3 functions, each returning a Promise !
// each Promise triggers after a certain timeout (respectively 1000ms, 2000ms and 3000ms).
// ----------------------------------
// expected output :
// "One Mississippi !";
// "then ... Two Mississippis !!"
// "then ... Three Mississippis !!!"

function howManyMissippis(msg, timing) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (msg === undefined) reject("sorry, i need a message here !!!");
      else {
        console.log(msg);
        resolve("yes !");
      }
    }, timing);
  });
}

async function start() {
  try {
    const x1 = await howManyMissippis("1 Mississippi !", 1000); // returns yes 
    const x2 = await howManyMissippis("2 Mississippis !!", 2000); // same o
    const x3 = await howManyMissippis("3 Mississippis !!!", 3000); // same o
    const x4 = await howManyMissippis(undefined, 1000); // will be reject
  } catch (error) {
    console.error(error);
  }
}


async function start2() {
  try {
    const x1 = await howManyMissippis("1 Mississippi !", 1000); // returns yes 
    const x2 = await howManyMissippis("2 Mississippis !!", 2000); // same o
    const x3 = await howManyMissippis("3 Mississippis !!!", 3000); // same o
    const x4 = await howManyMissippis(undefined, 1000); // will be reject
  } catch (error) {
    console.error(error);
  }
}

start2();
