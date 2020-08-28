// arr, arr's content, arr.length
const fruits = ["apple", "banana", "pear", "peach", "mango"];

fruits[0];
fruits[1];
fruits[2];
fruits[3];

arr === fruits[0]; // false

fruits[0] === fruits.length; // false

function dummy(nb) {
  return "foo";
  // after the return
  return "bar";
}

function dummy2(nb) {
  if (nb < 0) return "foo";
  else return "bar";
}

function iterate(arr) {
  const tmp = [];
  let indexOfInterest;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!tmp.includes(element)) tmp.push(element);
    if (i === arr.length - 2) indexOfInterest = i;
  }
  return { tmp, indexOfInterest };
}

const result = dummy(10); // ???

const result2 = iterate(["a", "b", "c"]);
