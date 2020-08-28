const sneaker1 = {
  name: "Jordan 4",
  price: 220,
  colors: ["black", "red"],
  ref: "JODKBQDNKNALDJO",
  brand: "Nike",
};

const sneaker2 = {
  name: "Superstar",
  price: 100,
  colors: ["white", "black"],
  ref: "JQDUGUBZDODNONX",
  brand: "Adidas",
};

const sneakers = [];

sneakers.push(sneaker1);
sneakers.push(sneaker2);

sneakers.push({
  name: "Clyde",
  price: 80,
  colors: ["green", "black"],
  ref: "LSKSZASB01010E",
  brand: "Puma",
});

sneakers.unshift({
  name: "Foo",
  price: 80,
  colors: ["grey", "black"],
  ref: "HSK2?SS29Z9D9",
  brand: "Bar",
});

// console.log(sneakers);


// sneakers.shift();

console.log(sneakers.name)

console.log(sneakers);

// const numbers = [1, 2, 3];

// numbers.shift();

// console.log(numbers)

