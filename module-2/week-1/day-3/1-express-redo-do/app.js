const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = 8080;

// ===> INITIAL CONFIG
// > TEMPLATE CONFIG

app.use(express.static(__dirname + "/public")); // set the public folder (where browser can download files from)
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

// ROUTING

const pageRouter = require("./routes/pages");
app.use(pageRouter);

app.use(require("./routes/data").router);

app.get("*", (req, res) => {
  res.render("notFound");
});

// KICKSTART PHASE

app.listen(PORT, () => {
  console.log(`app is ready to rock @ http://localhost:${PORT}`);
});
