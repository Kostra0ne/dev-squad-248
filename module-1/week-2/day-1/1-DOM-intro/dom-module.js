const introP = document.getElementById("intro");
const body = document.querySelector("body");
const secondTitle = document.getElementById("secondary-title");

// console.log("--- A -->");

console.log(">>>> 1 >>>> ", secondTitle, typeof secondTitle);
console.log(">>>> 2 >>>> ", introP, typeof introP);

// setInterval(() => {
introP.id = "DOM-is-awesome";
introP.className += " is-highlighted";

secondTitle.textContent = "FOOOOO";
secondTitle.style.fontSize = "20px";
secondTitle.style.color = "blue";
secondTitle.style.fontWeight = "200";
// }, 2000);

const titleMetrics = secondTitle.getBoundingClientRect();
console.log(">>>> 3 >>>> ", titleMetrics);

const titleText = secondTitle.textContent;
console.log(">>>> 4 >>>> ", titleText);

const todoList = document.getElementById("todo-list");
console.log(">>>> 5 >>>> ", todoList.innerHTML);
console.log(">>>> 6 >>>> ", todoList.outerHTML);
console.log(">>>> 7 >>>> ", introP.outerHTML);

const bodyElement = document.querySelector("body");
("returns Object || null");

// console.log(bodyElement)

// bodyElement.innerHTML += introP.outerHTML;

const secondWayToAccessTitle = document.querySelector("#secondary-title");

console.log(">>>> 8 >>>> ", secondWayToAccessTitle);
console.log(secondWayToAccessTitle === secondTitle);

const firstTodoItem = document.querySelector("#todo-list .item:first-of-type");
const lastTodoItem = document.querySelector("#todo-list .item:last-of-type");

console.log(">>>> 9 >>>> ", firstTodoItem, lastTodoItem);


const todos = document.querySelectorAll("#todo-list .item"); // Nodelist

// console.log(todos, todos.length);
// console.log(typeof todos);
// console.log(todos instanceof Array);
// console.log([...todos].map);

console.log(">>>> 10 >>>>> ");
console.log(todoList, todoList.children); // #todo-list > *

for (let i = 0; i < todoList.children.length; i++) {
  console.log(i, "  ===> ", todoList.children[i]);
  todoList.children[i].innerHTML += " " + i;
}

// children is Iterable (with numeric indexes) ... so you may want to spread into a new array
// if you wanna loop through it with forEach (which only exists on Array.proto ...)
[...todoList.children].forEach((child, i) => console.log(i, child));

console.log(">>>> 11 from child to parent !!! >>>>> ");

// from child to parent ...

console.log(lastTodoItem.parentElement.parentElement);

let currentItem = document.querySelector("#todo-list .item:last-of-type");

while (currentItem.id !== "goal") {
  currentItem = currentItem.parentElement;
}

console.log(currentItem);


// FROM SIBLING TO SIBLING 

console.log(">>>> 12 moving between siblings  !!! >>>>> ");
console.log(firstTodoItem.nextElementSibling)
console.log(lastTodoItem.previousElementSibling)


// LEGACY !!!! BUT NOT THAT USEFULL ANYMORE :)

// document.getElementsByTagName("a")
// document.getElementsByTagName("span")
// document.getElementsByTagName("div")

// document.getElementsByClassName("item")
// document.getElementsByClassName("foo")

// document.getElementsByName("user-email")

const as = document.getElementsByTagName("a"); // HTMLCollection are live (auto updated)
console.log(as);

setTimeout(() => {
  body.innerHTML += "<a>yata i'm a link</a>";
  console.log(as); // now as contain one more a (without reassignment => auto update => live collection )
}, 2000);
