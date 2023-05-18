const lunches = new Map();
const launchData = require("./lunches.schema");
const planetSchema = require("./planet.Schema");
let latestFlightNumber = 100;

const lunch = {
  flightNumber: 100,
  mission: "test mission",
  rocket: "Explore rocet",
  launchDate: new Date("December 25 1299"),
  destination: "kepler 442 eb",
  customer: ["custoer 3", "custoemr 3"],
  upcomming: true,
  success: true,
};

saveLunch(lunch);

async function saveLunch(lunch) {
  await launchData.updateOne(
    {
      flightNumber: lunch.flightNumber,
    },
    lunch,
    { upsert: true }
  );
}
async function getLaststFlightNumber() {
  const lastestNum = await planetSchema.findOne({}).sort("-flightNumber");
  return lastestNum;
}

async function schedulaLUnch(lunch) {
  const flightNum = (await getLaststFlightNumber()) + 1;
  const lunchonedata = Object.assign(lunch, {
    flightNumber: flightNum,
    customer: ["zero to master", "NASA"],
    upcomming: true,
    success: true,
  });
  await saveLunch(lunchonedata);
}

// lunches.set(lunch.flightNumber, lunch);

function addNewLunch(lunch) {
  latestFlightNumber++;
  lunches.set(
    latestFlightNumber,
    Object.assign(lunch, {
      flightNumber: latestFlightNumber,
      customer: ["zero to master", "NASA"],
      upcomming: true,
      success: true,
    })
  );
}

module.exports = { lunches, addNewLunch ,schedulaLUnch };
