import { displayGameoverMessage, displaySuccessMessage } from "./message.js";
import { count  } from "./counter.js";

// console.log(count);

const id = count(3, displaySuccessMessage, () => {
    clearInterval(id);
    displayGameoverMessage();
});

console.log("return by count %s", id);