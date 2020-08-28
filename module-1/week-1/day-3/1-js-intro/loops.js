// while, for, do.. while, for...of, for...in, forEach

// INFINITE LOOP !!!!!!
// while(true) {
//     console.log("you are going to kill your computer's RAM");
// }

var score = 0;

while (score < 10) {
  console.log(score);
  score += 1;
}

console.log("end of while loop", score);

console.log("-------------------------");

const abc = "abcdefghijklmnopqrstuvwxyz";
//           0 ...................... n (structure's length - 1)

for (let i = 0; i < abc.length; i += 1) {
  console.log(i, abc[i]);
}

nodemon foo.js