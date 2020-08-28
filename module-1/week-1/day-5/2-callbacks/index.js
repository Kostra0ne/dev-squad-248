function foo(callback) {
  return "i'm foo " + callback();
}

function bar() {
  return "i'm bar";
}

function baz() {
  return "i'm baz";
}

function universalAnswer() {
  return 42;
}

function quizz() {
}

var result;

result = foo(bar);

console.log(result);

result = foo(baz);

console.log(result);

result = foo(universalAnswer);

console.log(result);

result = foo(quizz);

console.log(result);
