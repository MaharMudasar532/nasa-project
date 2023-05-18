const express = require("express");
const { getAllLunchesCont, newLunch } = require("./lunches.controller");
const lunchesRouter = express.Router();
lunchesRouter.get("/", getAllLunchesCont);
lunchesRouter.post("/", newLunch);
module.exports = lunchesRouter;
