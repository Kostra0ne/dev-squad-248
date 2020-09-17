require("dotenv").config(); // this should come first

const app = require("express")();
console.log("hello");
console.log(process.env);

app.get("/", (req, res) => {
  res.send("server says : i'm up !!!");
});

// heroku : you won't get a chanche to pick the port 
app.listen(process.env.PORT, () => {
  console.log(
    `server is ready to rock at http://localhost:${process.env.PORT}`
  );
});
