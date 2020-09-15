console.log("hello, world of node !");
// https://expressjs.com/en/api.html
// https://handlebarsjs.com/guide/
// https://nodejs.org/docs/latest-v13.x/api/

const express = require("express"); // get the most popular node framework
const path = require("path");
const app = express(); // it will return an object
const myImportedModule = require("./my-modules/foo");


// console.log(myImportedModule.doStuff(), myImportedModule.users);

// console.log(express);
// we will use this app object to build our server-side application

// now let's require our templating engine
// we picked hbs but you can give pug, h-jade and ejs (and more...) a go
const hbs = require("hbs");

// console.log(__dirname); // __dirname is a constant accessible in any express app (represents the absolute path to the current folder, starting from the harddrive root ...)

// TEMPLATING ENGINE SETUP
app.set("views", path.join(__dirname, "views")); // where are the actual pages (./views) ?
app.set("view engine", "hbs"); // which template engine will we use ? hbs
app.use(express.static(path.join(__dirname, "public"))); // static files (public for browsers)
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get("/", (httpRequest, httpResponse) => {
  // httpResponse is an object
  // httpResponse.sendFile(__dirname + "/views/home.html")
  const fakeLoggedInUser = {
    name: "Bill",
    lastname: "Killed",
    lang: "fr",
    isAdmin: true,
  };
  const title = fakeLoggedInUser.lang === "us" ? "Homepage" : "Accueil";
  const todos = [
    "learn express",
    "learn hbs",
    "learn mongo",
    "learn mongoose",
    "learn AJAX",
  ];
  console.log(">>>>" ,fakeLoggedInUser);
  // httpResponse.render("home", { title: title, todos: todos });
  httpResponse.render("home", {
    title,
    todos,
    wannaCode: false,
    user: fakeLoggedInUser,
    js: ["home-dom-script", "slider", "my-btn"]
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    fruits: ["mango", "pear", "orange", "banana"],
    users: ["jill", "will", "bill"],
    js: ["about-dom-script"],
    api: {
      doStuff: () => console.log("hello")
    }
  });
});

app.get("/contact", (req, res) => {
  res.send("<h1>contact</h1><p>fooo</p>");
});

app.listen(8080, () => {
  console.log("server is ready to rock");
});
