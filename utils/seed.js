require("dotenv").config();
const connection = require("../config/connection.js");
const { User, Thought } = require("../model/index.js");
const cleanDB = require("./cleanDB.js");
const { getThought } = require("./data.js");
const userData = require("./userData.json");


connection.once("open", async () => {
  console.log("connected");
// Delete the collections if they exist
await cleanDB(process.env.DB_NAME);
// await cleanDB("User", "users");

  
  const users = await User.insertMany(userData);
  // for (let i = 0; i < users.length; i++) {
  //   const friends = users._id;
  //   const user = new User({ username, email, friends });
  //   await user.save();
  // }

  const thoughts = [];
  for (let i = 0; i < users.length; i++) {
    const username = users[Math.floor(Math.random() * users.length)];
    const thoughtText = getThought();
    const thought = new Thought({ username, thoughtText });
    await thought.save();
    thoughts.push(thought);
  }


  console.info("Seeding complete! 🌱");
  process.exit(0);
});
