console.log("hello, world");
console.log(axios);

const ulElement = document.getElementById("trees");

const URL =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&q=&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

axios
  .get(URL) // returning a Promise (async)
  .then((httpResult) => {
    // promise fullfilled
    console.log(httpResult); // log the returned response
    console.log(httpResult.data.records);
    // axios always store the actual data in this "data" key
    displayResults(httpResult.data.records);
  })
  .catch((httpError) => {
    // promise unfullfilled
    console.error(err); // log the cause of the error
  });

function displayResults(list) {
  list.forEach((item) => {
    ulElement.innerHTML += `<li>
        <h2>${item.fields.espece} -  ${item.fields.genre}</h2>
        <p>
        ${item.fields.adresse}
        </p>
    </li>`;
  });
}
