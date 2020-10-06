const cat = { age: 9, name: "Jean", owner: "Rico" };

// const name = cat.name;
// const age = cat.age;
// const owner = cat.owner;

// console.log(name, age, owner);

const { name, owner, foo, age } = cat; // Destructuring an object

// console.log(foo);
// console.log(age, name, owner);

const arr = [1000, "Joe", "Bill", { name: "Foo" }];

// const firstElement = arr[0];
// const secondElement = arr[1];

const [toto, foo2, bar, forthElement, fifthElement] = arr; // Destructuring an array

// console.log(foo2);

// function myFunction({ name, age, owner }) {
//   // function myFunction(object) {
//   //   console.log(
//   //     `The cat name is ${object.name} he is ${object.age} and the owner is ${object.owner}`
//   //   );
//   console.log(`The cat name is ${name} he is ${age} and the owner is ${owner}`);
// }

// myFunction(cat);

// function myOtherFunction(array) {
function myOtherFunction([totoFirst, totoSecond]) {
  //   console.log(`The first element is ${array[0]} the second is ${array[1]}`);
  console.log(`The first element is ${totoFirst} the second is ${totoSecond}`);
}

myOtherFunction(arr);
