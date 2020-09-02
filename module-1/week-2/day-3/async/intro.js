
// setTimeout and setInterval : accept 2 parameters 
// a callback function, a timing expressed in ms

const timeoutId = setTimeout(() => {
    // execute the provided callback in 2 seconds
    console.log("hey boys and girls");
}, 2000);


const intervalId = setInterval(() => {
    console.log("i'll return !!!");
}, 2000);