const numbers = [1, 2, 3];
const time2Numbers = numbers.map((nb) => nb * 2);

// when dealing with primitive values, these values are immutable
// meaning they can't be modified
// so you don't need to pay a special attention to thos

console.log("original array");
console.log(numbers);
console.log("new array with modified values");
console.log(time2Numbers);

console.log("**************");

// this are more complicated when dealing with object (literals, arrays, functions...)

const products = [
  { name: "phone", price: 120 },
  { name: "sneakers", price: 1000 },
  { name: "candy", price: 1 },
];

// those objects are passed as reference => a link to the object is created
/*
const user = {};
const falseClone = user;
console.log(user === falseClone); // will outupt true
/*

/**
 *
 * @param {Object} product the product to apply the discount on
 * @param {Number} discount the percentage to apply
 */
function apply10PercentDiscount(product) {
  // product.newPrice = don't do that if you don't want to modify the original array's values
  const copy = { ...product }; // let's create a clone of each product
  const newPrice = product.price - (product.price * 10) / 100;
  copy.price = newPrice;
  return copy;
}

const discountedProducts = products.map(apply10PercentDiscount);

console.log("original array");
console.log(products);
console.log("new array with modified values");
console.log(discountedProducts);
