
var nope = NaN  === NaN;
console.log(nope);
console.log("----1-----");

var isItReallyNaN = isNaN(NaN);
console.log(isItReallyNaN);
console.log("-----2----");

var r = isNaN(12);
console.log(r);
console.log("-----3----");
r = isNaN("foo");
console.log(r);
console.log("-----4----");
r = isNaN("123");
console.log(r);
console.log("-----5----");
r = isNaN("123abc");
console.log(r);
console.log("-----6----");
r = isNaN(false);
console.log(r);
console.log("-----7----");
r = !isNaN("good ?");
console.log(r);
console.log("-----7----");
r = !isNaN(123);
console.log(r);
