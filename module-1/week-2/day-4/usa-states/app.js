var allStates;

function filterStates(search) {
  // keep only the states matching the input's value (all lowercase)
  display(allStates.filter((s) => s.toLowerCase().match(search)));
  // send the filter response to the display function
}

function display(states) {
  // accepts an array of states (full or partial)
  const list = document.getElementById("states");
  list.innerHTML = ""; // reset the list
  states.forEach((state) => (list.innerHTML += `<li>${state}</li>`));
}

function handleHttpResponse(ajaxResponse) {
  allStates = Object.values(ajaxResponse.data); // get the returned object's values as an array and store it in va states
  display(allStates); // display the full list
  document.getElementById("filter_states").oninput = (evt) =>
    filterStates(evt.target.value.toLowerCase()); // listen to changes on the input and execute the filtering function
}

axios // get the data via ajax
  .get(
    "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json"
  )
  .then(handleHttpResponse) // if success
  .catch((err) => console.error(err)); // if error
