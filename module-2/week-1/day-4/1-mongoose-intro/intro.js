// PREREQUISITES :

// What is the M.V.C pattern ?
// Model View Controller

// https://i.imgur.com/LUhoPkS.png

// https://images.unsplash.com/photo-1519682718457-c82ce8296645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80

// What means C.R.U.D ?
// Create Read Update Delete
// basic operations you can to the model

// What is mongoose ?

// WE'LL USE MONGOOSE ONLY, NO EXPRESS APP OR VIEWS FOR NOW ; )

// yet another doc : https://mongoosejs.com/docs/guide.html

const mongoose = require("mongoose");

// DATABASE CONNECTION

mongoose.connect("mongodb://localhost/mongoose-intro", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("error", () => {
  console.error("NAY : database connection failed !!!");
});

mongoose.connection.on("connected", () => {
  console.log("YAY : Database connected !!!");
});


// SOME HARDCODED DATA TO FEED THE DATABASE (DB)

const users = [
  { name: "Jill", email: "jj@gmail.com", favoriteLanguage: "Erlang" },
  { name: "Jim", email: "jimmy@speedy.io", favoriteLanguage: "Rust" },
  { name: "Joe", email: "bim@bam.boum", favoriteLanguage: "Go" },
  { name: "Jay", email: "king@coder.fr", favoriteLanguage: "PHP" },
  { name: "Kim", email: "yo@wassup.com", favoriteLanguage: "Haskell" },
  { name: "Dan", email: "nocoder@dommage.fr", favoriteLanguage: null },
];

// DEFINE OUR FIRST SCHEMA + MODEL

const IronhackerSchema = new mongoose.Schema({
  name: String,
  email: String,
  favoriteLanguage: String,
});

const IronHackerModel = mongoose.model("ironhackers", IronhackerSchema);
// IronHackerModel is the model (an object) containing all the monogoose.model.API functions and properties
// "Ironhackers" is the collection
// this collection will be located in "mongoose-intro" database (db)

console.log("---------------------");
// console.log(IronHackerModel);
console.log(IronHackerModel.prototype);
console.log("---------------------");
// USE THE MODEL

async function launchCRUDSequence() {
  console.log("\n\n**** sequence start *******\n\n");
  await IronHackerModel.deleteMany(); //// CRUD(D)  RESET COLLECTION TO AVOID STACKING WITH NODEMON

  const emptyHackers = await IronHackerModel.find();

  console.log(
    "\n\n**** step 1 ---> find all documents in Ironhackers collection *******\n"
  );
  console.log(emptyHackers);
  console.log("hackers documents length => %s", emptyHackers.length);


  const newHackers = await IronHackerModel.insertMany(users); // CRUD(C)
  console.log(
    "\n\n**** step 2 ---> insert some hackers in Ironhackers collection *******\n"
  );

  // console.log("hackers documents length => %s", newHackers.length);
  //   console.log(newHackers);

  const allHackers = await IronHackerModel.find(); // CRUD(R)

  console.log(
    "\n\n**** step 3 ---> now the collection contains documents i *******\n"
  );
  console.log(allHackers);


  const oneMoreHacker = await IronHackerModel.create({
    name: "Bob",
    email: "java-guy@oop.net",
    favoriteLanguage: "Java",
  });// CRUD(C)


  console.log("\n\n**** step 4 ---> let's create one more document *******\n");
  console.log(oneMoreHacker);


  const updatedHacker = await IronHackerModel.findOneAndUpdate(
    { email: "java-guy@oop.net" }, // search query !
    {
      email: "functionnal-guy@better.net",
      favoriteLanguage: "JS",
    }, // the update values
    { new: true } // mandatory if you want to retrieve the updated document as resolve value
  );

  console.log("\n\n**** step 5 ---> update the Java guy :D ! *******\n");
  console.log(updatedHacker);


  const retreivedHacker = await IronHackerModel.findOne({
    favoriteLanguage: null,
  });

  console.log(
    "\n\n**** step 6 ---> find one hacker by favoriteLanguage *******\n"
  );


  const deletedHacker = await IronHackerModel.deleteOne({
    favoriteLanguage: null,
  });

  console.log(
    "\n\n**** step 7 ---> delete the first hacker with a null favoriteLanguage *******\n"
  );
  console.log(deletedHacker);

  
  console.log("\n\n**** sequence end : final result *******\n\n");
  console.log(await IronHackerModel.find());
}

launchCRUDSequence();
