const {getAllPlanets} = require("../../modals/planet.modal");

async function getPlanet(req, res) {
  return res.status(200).json(await getAllPlanets);
}



module.exports = getPlanet

