import { League } from "./espn-api/league/league.js";
import { Player } from "./espn-api/player/player.js";
import { Team } from "./espn-api/team/team.js";
import { Settings } from "./espn-api/settings/settings.js";
import { EspnRequests } from "./espn-api/requests.js";
// import data from "./espn-apexample responses/expampleTeam.json" assert { type: "json" };

const league = new League(946854126, 2023);
const leagueData = await league.fetchLeague();
await league.fetchTeams(leagueData);
await league.fetchPlayers();
await league.fetchDraft();
const matchups = await league.fetchScoreboard(17);
console.log(matchups[1]);
