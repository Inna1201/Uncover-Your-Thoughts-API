const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { dataUsers, possThoughts } = require("./data");


connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Thought.deleteMany({});
  await User.deleteMany({});


  await User.collection.insertMany(dataUsers);
  await Thought.collection.insertMany(possThoughts);

  console.table(dataUsers);
  console.table(possThoughts);
  console.info("Seeding completed.");
  process.exit(0);
});
