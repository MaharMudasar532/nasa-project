const mongoose = require("mongoose");

const mongo_url =
  "mongodb+srv://test:Bl2V3Dzxn1o3GJaN@cluster0.umr6zc6.mongodb.net/testDB?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("connection done");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

async function connectMongo() {
  await mongoose.connect(mongo_url);
}

module.exports = { connectMongo };
