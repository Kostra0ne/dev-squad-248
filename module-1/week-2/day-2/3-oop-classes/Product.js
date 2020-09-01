class Product {
  constructor(infos) {
    // this represents the currently build object
    this.price = infos.price;
    this.ref = infos.ref;
    this.brand = infos.brand;
    this.name = infos.name;
  }
  // in the methods (function tied to a class) this represents the current calling object
  getPrice() {
    return `${this.price} euros`;
  }

  getFullProductInfos() { // getters allow us to access all / part of the current object
    return `${this.name} (ref: ${this.ref}) made by ${this.brand} costs ${this.getPrice()}`;
  }

  setPrice(newPrice) {  // setters are meant to set (update) the current object
    if (isNaN(newPrice)) throw new Error("I've seen you coming, you troll !!!");
    this.price = newPrice;
  }
}

const phone1 = new Product({
  price: 400,
  ref: "JDKJDSD",
  brand: "Google",
  name: "Pixel 4a",
});

const phone2 = new Product({
  price: 800,
  ref: "HDKZLZM",
  brand: "Apple",
  name: "Iphone 9",
});

console.log("-------------------------");
console.log(phone1.getPrice());
console.log(phone2.getPrice());
console.log("-------------------------");
console.log(phone1.getFullProductInfos());
console.log(phone2.getFullProductInfos());
console.log("-------------------------");
phone2.setPrice(1000);
console.log(phone2.getFullProductInfos());
