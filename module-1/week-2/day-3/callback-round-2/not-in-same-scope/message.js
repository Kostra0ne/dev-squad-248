export function displayGameoverMessage() {
  alert("game over !");
}

export function displaySuccessMessage(clbk) {
  clbk(alert("congrats !"));
}
