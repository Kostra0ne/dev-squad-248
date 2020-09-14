// JS provides a bunch of "built-in" constructor functions

const truthy = new Boolean(1);
const array = new Array("foo", "bar", "baz"); // ["foo", "bar", "baz"]
const string = new String("hello Raph"); // ["foo", "bar", "baz"]
const date = new Date();


// actually under the hood, all the given data-types are the result of a constructor call ...
// js is a fully functional programming language

console.log(array);
console.log(truthy);
console.log(date);
console.log(string);
