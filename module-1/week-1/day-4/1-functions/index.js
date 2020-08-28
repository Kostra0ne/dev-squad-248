// function expression

/**
 * A simple function performing a multiplication on 2 numbers
 * @author Guillaume Amg <foo@bar.baz>
 * @param { Number} a a valid number
 * @param { Number } b a valid number
 * @returns { Number } the multiplication result
 * @throws { Error } Will throw an error if a OR b is NaN
 */
function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("a AND be must be of type Number");
  return a * b;
}

const substract = function (a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("a AND be must be of type Number");
  // this func is anonymous (no name attached)
  return a * b;
};

var result;
try {
  result = multiply(10, 10);
  console.log(" res 1 >>> ", result);

  result = multiply(9.67, 100.13);
  console.log(" res 2 >>> ", result);

  result = multiply(2, "foo");
  console.log(" res 3 >>> ", result);
  
  result = substract(result, 10)
  console.log(" res 4 >>> ", result);

} catch (err) {
  console.error(err);
}

console.log("program continues ...");
