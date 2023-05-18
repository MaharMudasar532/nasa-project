const { parse } = require("csv-parse");
const fs = require("fs");

const planet = require("./planet.Schema");

const habitAblePlanet = [];

function isHabitAblePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
const result = [];
function loadPlanetData() {
  new Promise((resolve, reject) => {
    fs.createReadStream("kepler_data.csv")
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitAblePlanet) {
          // habitAblePlanet.push(data);
          await planet.updateOne(
            {
              keplerName: data.kepler_name,
            },
            { keplerName: data.kepler_name },
            { upsert: true }
          );
        }
        // result.push(data);
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        // console.log(result);
        resolve();
      });
  });
}

async function getAllPlanets() {
  await planet.find({});
}

module.exports = {
  getAllPlanets,
  loadPlanetData,
};
