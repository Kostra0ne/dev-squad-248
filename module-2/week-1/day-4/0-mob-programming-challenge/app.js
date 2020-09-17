// ENV VARIABLES
require("dotenv").config();

// DATABASE CONNECTION
require("./config/mongodb");

// REQUIRED DEPENDENCIES
const express = require("express");
const app = express();
const hbs = require("hbs");

// TEMPLATE ENGINE CONFIG
app.use(express.static(__dirname + "/public")); // set the public folder (where browser can download files from)
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

// BODY PARSER
// ....

// HARDCODED DATA : We'll use the database right after
const users = [
  { name: "Jill", email: "jj@gmail.com", favoriteLangage: "JS" },
  { name: "Jim", email: "jimmy@foo.bar", favoriteLangage: "Rust" },
  { name: "Joe", email: "bim@bam.boum", favoriteLangage: "Go" },
  { name: "Jay", email: "king@coder.fr", favoriteLangage: "PHP" },
  { name: "Kim", email: "yo@wassup.com", favoriteLangage: "Haskell" },
];

const images = ["1.jpg", "2.jpg", "3.gif"];


// ROUTES 

app.get("/", (req, res) => {
  res.render("home", { images, css: ["mod.image-gallery"] });
});

app.get("/my-dev-squad", (req, res) => {
  res.render("allUsers", { users, css: ["mod.list-grid"]  });
});

app.get("/add-new-ironhacker", (req, res) => {
  res.render("formUser", { css: ["mod.form"] });
});

app.get("/api/ironhackers", (req, res) => {
  res.json(users);
});


// KICKSTART

app.listen(process.env.PORT, () => {
  console.log(`ready to rock @ http://localhost:${process.env.PORT}`);
});
