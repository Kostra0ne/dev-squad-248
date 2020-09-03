
function start() { //To avoid the variable in the global scope
	
// Write your Pizza Builder JavaScript in this file.
// Constants
var basePrice = 10;
// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1},
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(setVisibility);
	function setVisibility(pep){
		state.pepperonni ? (pep.style.visibility = "visible") : (pep.style.visibility = "hidden");
	}
}
const changeVisibility = (ingredient, name) =>
  state[name]
    ? (ingredient.style.visibility = "visible")
    : (ingredient.style.visibility = "hidden");

const renderMushrooms = () =>
  document
    .querySelectorAll(".mushroom")
    .forEach((mushroom) => changeVisibility(mushroom, "mushrooms"));

const renderGreenPeppers = () =>
  document
    .querySelectorAll(".green-pepper")
    .forEach((gp) => changeVisibility(gp, "greenPeppers"));

function renderWhiteSauce() {
  const sauce = document.querySelector(".sauce");
  state.whiteSauce ? sauce.classList.add("sauce-white") : sauce.classList.remove("sauce-white");
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector(".crust");
  state.glutenFreeCrust
    ? crust.classList.add("crust-gluten-free")
    : crust.classList.remove("crust-gluten-free");
}

function renderButtons() {
  let btnPepperonni = document.querySelector(".btn-pepperonni");
  let btnMushrooms = document.querySelector(".btn-mushrooms");
  let btnGreenPeppers = document.querySelector(".btn-green-peppers");
  let btnglutenFreeCrust = document.querySelector(".btn-crust");
  let btnwhiteSauce = document.querySelector(".btn-sauce");
  state.pepperonni
    ? btnPepperonni.classList.add("active")
    : btnPepperonni.classList.remove("active");
  state.mushrooms ? btnMushrooms.classList.add("active") : btnMushrooms.classList.remove("active");
  state.greenPeppers
    ? btnGreenPeppers.classList.add("active")
    : btnGreenPeppers.classList.remove("active");
  state.glutenFreeCrust
    ? btnglutenFreeCrust.classList.add("active")
    : btnglutenFreeCrust.classList.remove("active");
  state.whiteSauce
    ? btnwhiteSauce.classList.add("active")
    : btnwhiteSauce.classList.remove("active");
  //   const buttons = document.querySelectorAll(".btn")
  //   buttons.forEach((btn,i)=>Object.values(state)[i] ? btn.classList.add("active") : btn.classList.remove("active"))
}

// with event.target --------------------------
const renderButtons2 = event => event.target.classList.toggle("active");
// document.querySelectorAll(".btn").forEach((btn) => (btn.onclick = renderButtons2));
// --------------------------------------------

function renderPrice() {
  let pepLi = document.querySelectorAll("aside ul li")[0];
  let musLi = document.querySelectorAll("aside ul li")[1];
  let greLi = document.querySelectorAll("aside ul li")[2];
  let whiLi = document.querySelectorAll("aside ul li")[3];
  let gluLi = document.querySelectorAll("aside ul li")[4];

  state.pepperonni ? (pepLi.style.display = "block") : (pepLi.style.display = "none");
  state.mushrooms ? (musLi.style.display = "block") : (musLi.style.display = "none");
  state.greenPeppers ? (greLi.style.display = "block") : (greLi.style.display = "none");
  state.glutenFreeCrust ? (gluLi.style.display = "block") : (gluLi.style.display = "none");
  state.whiteSauce ? (whiLi.style.display = "block") : (whiLi.style.display = "none");

  let pepFinPrice = ingredients.pepperonni.price * state.pepperonni;
  let musFinprice = ingredients.mushrooms.price * state.mushrooms;
  let greFinPrice = ingredients.greenPeppers.price * state.greenPeppers;
  let whiFinPrice = ingredients.whiteSauce.price * state.whiteSauce;
  let gluFinPrice = ingredients.glutenFreeCrust.price * state.glutenFreeCrust;

  let finalPrice = basePrice + pepFinPrice + musFinprice + greFinPrice + whiFinPrice + gluFinPrice;

  document.querySelector("strong").innerHTML = `$${finalPrice}`;
}

// function renderPrice2() {
//   const displayBlock = (prop, element) =>
//     state[prop] ? (element.style.display = "block") : (element.style.display = "none");

//   let buttons = document.querySelectorAll("aside ul li")
//   buttons.forEach((btn,i)=>displayBlock(Object.keys(ingredients)[i],btn))

//   let finalPrice2 = Object.values(ingredients).reduce(
//     (price, ingredient, i) => ingredient.price * Object.values(state)[i] + price,
//     10
//   );

//   document.querySelector("strong").innerHTML = `$${finalPrice2}`;
// }

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function () {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
}
start()