const btns = document.querySelectorAll(".btn");

function action(btn) {
  return new Promise((resolve) => {
    btn.onclick = () => {
      btn.classList.add("is-active");
      resolve();
    };
  });
}

function finish() {
  document.getElementById("success").classList.remove("is-hidden");
}

const allActions = [];

btns.forEach((btn) => {
  allActions.push(action(btn)); // what you get here is a pending Promise ...
});

console.log(allActions);

Promise.all(allActions).then(finish);
