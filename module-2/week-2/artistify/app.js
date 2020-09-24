require("dotenv").config(); // Allows us to read the variables contained in the .env file.
require("./config/dbConnection"); // Connection to the database
require("./helpers/hbs-helpers");

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require("hbs");
const mongoose = require("mongoose");
const session = require("express-session"); // Etablishes a session (cookie) between client and server
const MongoStore = require("connect-mongo")(session); // Create a mongostore with the session object
const indexRouter = require("./routes/index");
const flash = require("connect-flash");
const labelsRouter = require("./routes/labels"); // Labels router

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs"); // Allows you to render your views without the .hbs extension
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
); // Creates a session object, gives a cookie to client that the client sends back on every request
app.use(flash());

app.use(function (req, res, next) {
  res.locals.error_message = req.flash("error");
  res.locals.success_message = req.flash("success");
  next();
});

app.use(function (req, res, next) {
  if (req.session.currentUser) {
    res.locals.isLoggedIn = true;
    res.locals.isAdmin = req.session.currentUser.role === "admin";
    res.locals.username = req.session.currentUser.username;
  } else {
    res.locals.isLoggedIn = false;
    res.locals.username = null;
    res.locals.isAdmin = false;
  }
  next();
});

app.use(function (req, res, next) {
  // console.log(req.session);
  next();
});

app.use("/", require("./routes/api-test"));
app.use("/", indexRouter);
app.use(labelsRouter); // Don't forget to use your router !
// const artistRouter = require("./routes/artists");
// app.use("/", artistRouter); // same as below
app.use("/api/styles", require("./routes/api.styles"));
app.use("/styles", require("./routes/styles"));
app.use("/auth", require("./routes/auth"));
app.use("/artists", require("./routes/artists"));
app.use("/albums", require("./routes/albums"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.locals.Title = "Foo";

// error handler

// How to use :
// In any part of your application, if you call the next() function
// with a parameter eg: next("hello")
// This middleware function will be called.
// You usually want to pass in the error object so you can handle it in this
// middleware function.
// eg: next(error)
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
