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
  // console.log(`recieved the parameters ${leagueId}, ${year}, ${week}`);

  const requests = new EspnRequests(leagueId, year);
  const data = await requests.getDaotw(week);

  const response = new Daotw(data, week);
  res.json(response);
});

routes.get("/scores/:leagueId/:year/:teamId", async (req, res) => {
  const leagueId = parseInt(req.params.leagueId, 10);
  const year = parseInt(req.params.year, 10);
  const teamId = parseInt(req.params.teamId, 10);

  const league = new League(leagueId, year);
  const leagueData = await league.fetchLeague();
  await league.fetchTeams(leagueData);

  const team = league.teams.find((team) => team.teamId === teamId);
  res.json({ teamName: team.teamName, scores: team.scores });
});

export default routes;
