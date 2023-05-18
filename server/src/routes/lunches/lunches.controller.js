const { lunches, addNewLunch  , schedulaLUnch} = require("../../modals/lunches.modal");
const lunchesSchema = require("../../modals/lunches.schema");


async function getAllLunchesCont(req, res) {
  res.status(200).json(Array.from(lunches.values()));
  // res.status(200).json(lunchesSchema.find({}))
  // return await lunchesSchema.find({})
}

function newLunch(req, res) {
  const data = req.body
  schedulaLUnch(data);
  return res.status(201).json(data);
}
module.exports = {
  getAllLunchesCont,
  newLunch,
};
