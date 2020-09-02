//-----Iteration 1-----

function getAllDirectors(array){
  const filteredDirectors = array.map(function(movie){
    return movie.director;
  })
  return filteredDirectors;
}
//Shorter way to write iteration 1 with a fat arrow
// const getAllDirectors = array => (array.map(movie => movie.director)); 

//-----Bonus iteration 1-------

// we use the previous function getAllDirectors to get only the directors
//Then we filter this array by comparing if the index of the director we are iterating on is equal to the indexOf() this director
//Reminder : the function indexOf returns the first index at which a given element can be found in the array
function cleanedArray(array){
  const cleanedArray = getAllDirectors(array).filter((director,index) => {
    return getAllDirectors(array).indexOf(director) === index;
  })
  return cleanedArray;
}

//-----Iteration 2------

function howManyMovies(array){
  //Filter the array to get only Spielberg and drama movies
  const stevenSpielbergMovies = array.filter(movie => {
    return movie.director === "Steven Spielberg" && movie.genre.includes('Drama')
  })
  //Calculate the length of the array you've just filtered to know how many movies are drama movies and have Spielberg as a director
  return stevenSpielbergMovies.length
}

//Iteration 3
function ratesAverage(array){
  //Check if the array is empty
  if (array.length === 0) return 0;

  //Calculate the sum with reduce
  const sum = array.reduce((acc,curr) => {
    // checking if the current value for the rate is falsy, if it is only return the accumulator and not the rate which doesn't exist or is null
    if(!curr.rate){
      return acc;
    }
    //Don't forget to convert the rates which are in strings in numbers and add it to the accumulator
    return acc + Number(curr.rate);
  },0) // ---> Don't forget to initialise the accumulator

  //Return the average
  let average = sum/array.length;
  return Number(average.toFixed(2));
}

//Iteration 4

function dramaMovies(array){
  //Filter the movies which have a drama genre
  const filteredDrama = array.filter(movie => movie.genre.includes('Drama'));
  //Reuse your ratesAverage() function to get the average rates of your array that contains only drama movies
  return ratesAverage(filteredDrama);
}

//Iteration 5

function orderByYear(array){
  const newSortedArray = array.sort((movie1, movie2) =>{
    //If the two movies we are comparing have the same year....
    if(movie1.year === movie2.year){
      //...compare their titles
      return movie1.title.localeCompare(movie2.title);
    }
    //else return first the movie with the lowest year
    return movie1.year - movie2.year;
  })
  return newSortedArray;
}

//Iteration 6

function orderAlphabetically(array){
  //Sort the movie by title
  const sortedArray = array.sort((movie1,movie2) => {
    return movie1.title.localeCompare(movie2.title);
    //Another way to order alphabetically your titles
    //if(movie1.title < movie2.title) return 1;
    //if(movie1.title > movie2.tile) return -1;
    //return 0;
  })
  //only keep the tiles 
  .map(movie => movie.title)
  //Keep only the first 20 ones
  .splice(0,20)

  return sortedArray;
}

