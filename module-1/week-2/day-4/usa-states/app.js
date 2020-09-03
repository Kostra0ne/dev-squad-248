const URL =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

const input = document.getElementById("filter_states");
const list = document.getElementById("states");
var states = null;

function filterStates() {
  displayStates(
    states.filter((s) => s.toLowerCase().match(input.value.toLowerCase()))
  );
}

function displayStates(states) {
  list.innerHTML = "";
  states.forEach((state) => (list.innerHTML += `<li>${state}</li>`));
}

axios
  .get(URL)
  .then((res) => {
    console.log(res);
    states = Object.values(res.data);
    displayStates(states);
    input.oninput = filterStates;
  })
  .catch((err) => {
    console.error(err);
  });
