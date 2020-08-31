function start() {
  const introParag = document.getElementById("intro");
  console.log(">>> ", introParag);
}


// window.onload = start;

//           event-listener     event-handler
// window.addEventListener("load", start);
window.addEventListener("DOMContentLoaded", start);
// problem : there is only one load event
