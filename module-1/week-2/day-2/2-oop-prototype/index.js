function IronHacker(name, age) {
  // PascaleCased since this function is a constructor !!!
  if (!(this instanceof IronHacker))
    throw new Error("You're missing the new keyword : ya nooooob !");

  if (!age)
    throw new Error("hey sorry friend : i need an age argument here !!!");

  if (!isNaN(name) || typeof name !== "string")
    throw new Error("hey sorry friend : nume must be string !!!");

  this.loveCoding = true;
  this.name = name || "anonymous hacker"; // set a default value if name is missing
  this.age = age;
  //   return this; // any function called with the new keyword (as a constructor) will return this by default
}

IronHacker.prototype.greeting = function () {
  return "Hey ! My name is " + this.name + " ! Nice to meet ya ;)";
};

IronHacker.prototype.goToIronBeer = function () {
  return "yaaaaaaay !!! Beer time !";
};

const ironhacker1 = new IronHacker("gui", 40); // instanciating => creating a new instance of IronHacker
// an instance of is an object build with (constructed) with a specific function/interface/class

console.log(
  ironhacker1,
  typeof ironhacker1,
  ironhacker1.name,
  ironhacker1.loveCoding
);

const hacker2 = new IronHacker("jim", 23); // each hacker is an instanceof the IronHacker constructor
const hacker3 = new IronHacker("kim", 33);
const hacker4 = new IronHacker("jill", 44);
const hacker5 = new IronHacker("Phil", 33);

// console.log(hacker2 === hacker3);
console.log(ironhacker1.greeting());
console.log(hacker2.goToIronBeer());
console.log(hacker3.goToIronBeer());
console.log(hacker4.goToIronBeer());
console.log(hacker5.goToIronBeer());
console.log(hacker5.greeting());

function Cat(infos) {
  if (!(this instanceof Cat))
    throw new Error("You're missing the new keyword !");
    
  this.name = infos.name;
  this.eyeColor = infos.eyeColor;
  this.colors = infos.colors;
  this.lovesMe = infos.lovesMe;
  this.weight = infos.weight;
}

Cat.prototype.meow = function () {
  return "meowwww";
};

const fugee = new Cat({
  // option hash ...
  name: "fugee",
  age: 1,
  colors: ["white", "gray"],
  eyeColor: "blue",
  weight: "2kg",
  lovesMe: true,
});

const mina = new Cat({
  // option hash ...
  name: "mina",
  age: 6,
  colors: ["white", "red", "brown"],
  eyeColor: "green",
  weight: "4kg",
  lovesMe: true,
});

console.log(fugee);
console.log(fugee.meow());
console.log(mina.meow());
console.log(mina);
