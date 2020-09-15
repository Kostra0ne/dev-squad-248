// destructuring => extract part of an object with a dedicated syntax

// OBJECT LITERALS

function getFullName(user) {
  const name = user.name;
  const lastname = user.lastname;
  return `${name} ${lastname}`;
}

function getFullName1(user) {
  const { name, lastname } = user; // extract name and lastaname properties out of the user object
  return `${name} ${lastname}`;
}

function getFullName2({ name, lastname }) {
  return `${name} ${lastname}`;
}

const getFullName3 = ({ name, lastname }) => `${name} ${lastname}`;

const ironhacker = {
  name: "Bill",
  lastname: "Doe",
  age: 26,
  succeededModule1: true,
};

const skater = {
  name: "Eric",
  lastname: "Koston",
  age: 50,
  succeededModule1: false,
};

console.log(">>>", getFullName(ironhacker));
console.log(">>>", getFullName1(ironhacker));
console.log(">>>", getFullName2(skater));
console.log(">>>", getFullName3(skater));

// ARRAYS

const numbers = [1, 22, 333, 432.3, 3231, 439292, 333, 0];

const [a, , b, ,x] = numbers;

console.log(a, b, x)

// numbers[numbers.length - 1];