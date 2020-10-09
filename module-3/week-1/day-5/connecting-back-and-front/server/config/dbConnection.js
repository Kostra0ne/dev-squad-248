const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log("COnnected to the DB successfull");
  })
  .catch((error) => {
    console.error("Failed to connect to the DB");
  });
