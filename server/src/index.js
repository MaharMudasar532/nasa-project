const http = require("http");
const app = require("./app");
// const mongoose = require("mongoose");

const express = require("express");
const getPlanetRouter = require("./routes/planet/planet.router");
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "public")));

const port = process.env.PORT || 8000;
const server = http.createServer(app);
const cors = require("cors");
const { habitAblePlanet, loadPlanetData } = require("./modals/planet.modal");
const lunchesRouter = require("./routes/lunches/lunches.router");
const { connectMongo } = require("./utils/mongo");
// const mongo_url = 'Bl2V3Dzxn1o3GJaN'

// const mongo_url =
// "mongodb+srv://test:Bl2V3Dzxn1o3GJaN@cluster0.umr6zc6.mongodb.net/?retryWrites=true&w=majority";
require("./utils/readDataFromCSV");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const startServer = async () => {
  await connectMongo();
  await loadPlanetData();
  server.listen(port, (req, res) => {
    console.log(`listening to the port no ${port}`);
  });
};

startServer();

app.use(getPlanetRouter);
app.use("/launches", lunchesRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
