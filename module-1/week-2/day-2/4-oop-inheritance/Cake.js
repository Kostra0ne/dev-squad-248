class Cake {
  constructor(ingredients, steps) {
    this.sugar = ingredients.sugar;
    this.flavor = ingredients.flavor;
    this.cookingSteps = steps;
  }

  startCooking() {
    return "go go go It's cooking time !!!";
  }

  getCookingSteps() {
    var tpl = "<ul>";
    this.cookingSteps.forEach((step) => (tpl += `<li>${step}</li>`));
    tpl += "</ul>";
    return tpl;
  }
}

class Cupcake extends Cake {
  constructor(ingredients, steps) {
    super(ingredients, steps);
    this.glazingColor = ingredients.glazingColor;
    this.glazingFlavor = ingredients.glazingFlavor;
  }

  getCookingSteps() {
    return (
      "<h1>How to make a delicious cupcake !</h1>" + super.getCookingSteps()
    );
  }

  howToTheGlazing() {
    return " Décorer vos cupcakes avec la crème au beurre et une poche à douille (pour faire plus joli) : Astuce, si vous n'avez pas de poche à douille, prenez un petit sachet de congélation dont vous aurez coupé un tout petit peu de l'un de ses coins !";
  }
}

const chocolateCake = new Cake(
  {
    sugar: "A pack vanilla sugar",
    flavor: "chocolate",
  },
  [
    "Mettre dans un ramequin le sucre, la vanille, les oeufs et le beurre préalablement fondu.",
    "Mélanger jusqu'à obtenir une pâte harmonieuse.",
    "Faire fondre le chocolat dans un bol, au micro-onde avec 2 cuillères à soupe d'eau, pendant quelques secondes.",
    "...",
    "Mettre dans un plat, et au four pendant environ 25 mn, thermostat 6 soit 180°C.",
  ]
);

const strawberryCupcake = new Cupcake(
  {
    sugar: "120g",
    flavor: "strawberry",
    glazingColor: "pink",
    glazingFlavor: "maracuja",
  },
  [
    "Faire fondre le beurre puis l'ajouter au sucre dans un saladier. Bien remuer.",
    "Ajouter les œufs puis la farine, le bicarbonate et la levure. Bien mélanger le tout pour éviter les grumeaux. Incorporer le lait et la vanille.",
  ]
);

console.log(chocolateCake);
console.log(chocolateCake.getCookingSteps());
console.log("-----------------------------");
console.log(strawberryCupcake);
console.log(strawberryCupcake.getCookingSteps());
console.log(strawberryCupcake.howToTheGlazing());