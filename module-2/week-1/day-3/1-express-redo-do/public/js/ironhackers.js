const hackers = document.querySelectorAll("#ironhackers .item");

function toggleActiveClass(evt) {
  evt.target.classList.toggle("is-active");
}

// hackers.forEach(hacker => hacker.onclick = toggleActiveClass);

hackers.forEach(hacker => hacker.addEventListener("click", toggleActiveClass));

// for (let i = 0; i < hackers.length; i++) {
//   hackers[i].addEventListener("click", toggleActiveClass);
// }
