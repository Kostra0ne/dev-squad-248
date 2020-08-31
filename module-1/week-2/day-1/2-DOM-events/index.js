const btn = document.getElementById("btn-1");
const input = document.getElementById("input-text-1");
const content = document.getElementById("input-content");
const clickCountTarget = document.getElementById("click-count");
var clickCount = 0;

// console.log(btn, input);

// THOSE 2 FUNCTIONS ARE EVENT-HANDLERS (CALLBACKS)
// THEY WILL PERFORM THE ACTION UPON A GIVEN EVENT
function handleClick(event) {
  clickCount += 1;
  console.log("clicked !!!", event, event.target, this, this === event.target);
  clickCountTarget.innerText = clickCount;
}

function handleInput(event) {
  console.log("inputed !!!", event, event.target, this, this === event.target);
//   content.innerText += " foo ";
  content.innerText += event.target.value;
}

btn.addEventListener("click", handleClick); // pay attention here !!!
input.addEventListener("input", handleInput); // no perenthesis on the function

// BELOW : SAME STUFF, THE SHORT WAY :)

// btn.onclick = handleClick;
// input.oninput = handleInput;

// THE JS FULL EVENT LIST IS LOCATED HERE
// https://developer.mozilla.org/en-US/docs/Web/Events
