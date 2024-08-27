import express from "express";
import { League } from "./league/league.js";
import { Daotw } from "./daotw/daotw.js";
import { EspnRequests } from "./requests.js";

const routes = express.Router();

// Route handler for /api/daotw/:leagueId/:year/:week
routes.get("/daotw/:leagueId/:year/:week", async (req, res) => {
  const leagueId = parseInt(req.params.leagueId, 10);
  const year = parseInt(req.params.year, 10);
  const week = parseInt(req.params.week, 10);
  console.log(`recieved the parameters ${leagueId}, ${year}, ${week}`);

  const requests = new EspnRequests(leagueId, year);
  const data = await requests.getDaotw(week);

  const response = new Daotw(data, week);
  res.json(response);
});

export default routes;
