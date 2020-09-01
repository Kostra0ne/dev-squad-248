class Dog {
  constructor(infos) {
    this.name = infos.name;
    this.age = infos.age;
  }

  bark() {
    return "Wooof !!!";
  }

  walk(direction) {
    return `${this.name} is now walking ${direction}`;
  }
}

const wako = new Dog({ name: "wako", age: 12 }); // creates a new instance of Dog

console.log(wako);
console.log(wako.bark());
console.log(wako.walk("north"));
console.log(wako.walk("south"));
console.log(wako instanceof Dog);
// console.log(wako.foo());
