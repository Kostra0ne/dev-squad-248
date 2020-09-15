// wait for clicks on button
// onclick ask user to input a value with a prompt ( questionUser() )
// this value must be a number
// do questionUser while the value is not correct
// then displaySuccess()

function start() {
  questionUser().then(displaySuccess).catch(displayFailure);
}

function questionUser() {
  return new Promise((resolve, reject) => {
    document.getElementById("user-input").onblur = (evt) => {
      if (isNaN(evt.target.value)) reject();
      else resolve();
    };
  });
}

function displaySuccess() {
  document.getElementById("success").classList.remove("hidden");
}

function displayFailure() {
  document.getElementById("failure").classList.remove("hidden");
}

document.getElementById("btn-start").onclick = start;
