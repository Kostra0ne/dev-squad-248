function foo() {} // a regular, plain simple function
// ... call be called :
var x = foo(); // called the regular way => returns undefined
var instanceOfFoo = new foo(); // called as a constructor => returns an object, instance of the function foo
// a class (syntactic sugar around the function's prototype concept)
class Foo {
  constructor() {
    this.message = "Hello Raphaelle";
  }
}

console.log("x => ", x);
console.log("instanceOfFoo => ", instanceOfFoo);

try {
  var foo2 = new Foo(); // can be instanciated with the new keyword
  console.log("foo2 => ", foo2);
  var noFoo = Foo(); // will crash the program if called otherwise
} catch (err) {
  console.log(err);
}

// ===================

class Character {
  constructor(name, life, strength) {
    this.name = name;
    this.life = life;
    this.weapon = null;
    this.strength = strength;
  }

  attack() {}
}

class Player extends Character {
  constructor(name, xp, life, strength) {
    super(name, life, strength);
    this.xp = xp;
  }
}

class Ennemy extends Character {
  constructor(name, life, strength) {
    super(name, life, strength);
  }
}

class Weapon {
  constructor(infos) {}
}

class World {
  constructor() {
    this.player = null;
    this.board = document.getElementById("board");
  }
  start() {
    this.player = new Player("gui", 0, 100, 100);
    this.player.weapon = new Weapon({
      color: "white and silver",
      name: "excalibur",
      origin: "magic",
      type: "melee",
      resistance: 300,
      hitPoint: 1000,
    });
  }
}

const weapon = {
  color: "white and silver",
  name: "excalibur",
  origin: "magic",
  type: "melee",
  resistance: 300,
  hitPoint: 1000,
};

const weaponAugmented = Object.assign(weapon, {
  attack: () => 200,
  regenerate: () => 100,
});

delete weaponAugmented.regenerate;

const weaponDecreased = Object.assign(weapon, {
  weaponAugmented,
  chose: "truc",
});

console.log(weaponDecreased);

// Using Object.assign and Object.create for inheritance

