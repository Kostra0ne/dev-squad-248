// console.log(process.argv);

const systemPath = process.argv[0];
const filePath = process.argv[1];

var sum = 0;

for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

// console.log(sum);

console.log(
  process.argv.reduce((acc, cv) => (!isNaN(cv) ? (acc += Number(cv)) : acc), 0)
);
