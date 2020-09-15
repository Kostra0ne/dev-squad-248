// let's install axios with a package manager called NPM
// you got npm installed when you installed node itself

// $ npm init -y
// will initialise the current folder as a node projetc
// you'll get a file named package.json out of it
// this package is your project's blueprint
// each project has it's own package.json

const axios = require("axios");

// console.log(axios);

const URL =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=deconfinement-pistes-cyclables-temporaires&q=&facet=type&facet=statut&facet=complement";

const axiosAllwaysReturnsAPromise = axios.get(URL);

console.log(axiosAllwaysReturnsAPromise); // <Pending...>

// axiosAllwaysReturnsAPromise
//   .then((result) => {
//     console.log(result.data);
//   })
//   .catch((error) => {
//     console.log("OH OH : Error");
//     console.log(error.data);
//   });

// axiosAllwaysReturnsAPromise
//   .then(printResult)
//   .catch(printError);

function printResult(value) {
  console.log(value);
}

function printError(error) {
  console.error(error);
}


axios.get("http://google.com")
.then(printResult)
.catch(printError)