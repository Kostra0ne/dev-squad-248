const btns = document.querySelectorAll(".btn");

function action(btn) {
  // your code here !!!
}

function finish() {
  document.getElementById("success").classList.remove("is-hidden");
}

const allActions = [];

btns.forEach((btn) => {
  allActions.push(action(btn));
});

console.log(allActions);

Promise.all(allActions).then(finish);
