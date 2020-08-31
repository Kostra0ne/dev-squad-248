const blockOne = document.getElementById("first-block");
const allBlocks = document.querySelectorAll(".block");

function handleMouseAction(evt) {
  evt.target.classList.toggle("is-active");
}

document
  .querySelectorAll(".block")
  .forEach((block) => (block.onclick = handleMouseAction));

/*

allBlocks.forEach(function(block) {
    block.onclick = handleMouseAction;
});


for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].onclick = handleMouseAction;
}

*/
