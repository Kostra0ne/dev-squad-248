console.log("hello ABOUT !");

const elements = document.querySelectorAll("*");

function displayMessage(evt) {
  alert("hellooo");
}

document
  .querySelectorAll(".btn")
  .forEach((btn) => (btn.onclick = displayMessage));
