import { League } from "./espn-api/league/league.js";
import { Player } from "./espn-api/player/player.js";
import { Team } from "./espn-api/team/team.js";
import { Settings } from "./espn-api/settings/settings.js";
import { EspnRequests } from "./espn-api/requests.js";
import { Daotw } from "./espn-api/daotw/daotw.js";
import express from "express";
import router from "./espn-api/routes.js";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Using the imported routes
app.use("/api", router);

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});

const league = new League(946854126, 2023);
const leagueData = await league.fetchLeague();
await league.fetchTeams(leagueData);
// await league.fetchPlayers();
// await league.fetchDraft();
// console.log(league.teams[0].scores);
const team = league.teams.find((team) => team.teamId === 1);
console.log(team.scores);

// const test = await league.requests.getDaotw(3);
// const daotw = new Daotw(test, 3);
// console.log(daotw);
