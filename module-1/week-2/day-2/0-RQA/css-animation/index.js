var score = 0;

function byId(id) {
  return document.getElementById(id);
}

function toggleAnimation(evt, str) {
  document.getElementById("shape").classList.toggle("is-animated");
}

function trackRangeValue(evt) {
  console.log(evt.target, evt.target.value);
  score += evt.target.value;
  console.log(score);
}

// document.getElementById("trigger-animation").onclick = (evt) => {
//   toggleAnimation(evt, "foo");
// };

byId("trigger-animation").onclick = toggleAnimation;

document.getElementById("my-range").oninput = trackRangeValue;

