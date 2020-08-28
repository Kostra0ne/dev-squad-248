function doASum(numbers) {
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// console.log(doASum([1, 1, 1]));
// console.log(doASum([1, 1, 100, 3000]));

const numbers = [1, 1, 100, 3000, 1000, 32.222];

const sum = numbers.reduce((accumulator, currVal) => {
  // console.log("---");
  // console.log(accumulator)
  return (accumulator += currVal);
}, 0);

const sum2 = numbers.reduce((acc, val) => (acc += val), 0);

console.log("SUM => ", sum);
console.log("SUM => ", sum2);

const leaderBoard = [
  { username: "Gui", score: 10 },
  { username: "Will", score: 1000 },
  { username: "Karim", score: 10 },
  { username: "Karim", score: 100 },
  { username: "Kim", score: 50 },
  { username: "Salim", score: 20 },
];

// D.I.Y (gang programming)
// use reduce to sum all the player's score

const sum3 = leaderBoard.reduce(function (accu, player) {
  return (accu += player.score);
  // for Each val in leaderboard, we return the updated accumalator
}, 0); // zero here is the original value for the accumulator ...

const sum4 = leaderBoard.reduce((acc, p) => (acc += p.score), 0);

console.log(sum3 == sum4);
