var matrix = [
  ["hey", "what", "is", "up", "squad", "?"], // 0
  // 0     1        2     3     4       5
  [":)", "^^", ":/", "^_^", ":("], // 1
  [100, 200], // 2
  [
    { score: 0, name: "joe" },
    { score: 5, name: "jack" },
    { score: 10, name: "jim" },
  ], // 3
];

console.log(matrix[1]);
console.log(matrix[1][3]);
console.log(matrix[0][3]);
console.log(matrix[3][1].name);
console.log(matrix[3][1]["name"]);

for (let i = 0; i < matrix.length; i++) {
  console.log("----");
  console.log(`i : ${i}`);
  for (let j = 0; j < matrix[2].length; j++) {
    console.log(`j : ${j} => ${matrix[2][0]}`);
  }
}

console.log(matrix[3][2].score);