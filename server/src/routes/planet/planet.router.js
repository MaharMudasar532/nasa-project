const express = require("express");
const getPlanet = require("./planet.controller");

const planetRoutes  = express.Router();

const getPlanetRouter = planetRoutes.get("/planet", getPlanet);

module.exports = getPlanetRouter;
