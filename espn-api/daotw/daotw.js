import { DTeam } from "./dteam.js";

export class Daotw {
  constructor(data, matchupPeriodId) {
    this.teams = [];
    this.matchupPeriodId = matchupPeriodId;

    this.fetchTeams(data?.schedule ?? []);
    this.updateTeamNames(data?.teams ?? []);
  }

  fetchTeams(data) {
    for (const week of data) {
      if (week.matchupPeriodId === this.matchupPeriodId) {
        this.teams.push(new DTeam(week?.away ?? undefined));
        this.teams.push(new DTeam(week?.home ?? undefined));
      }
    }

    // Sort in descending order
    this.teams.sort((a, b) => b.difference - a.difference);
  }

  updateTeamNames(data) {
    // Creating a lookup map from the data
    const teamLookup = {};
    data.forEach((team) => {
      teamLookup[team.id] = [team.name, team.logo];
    });

    // Mapping the names of the teams from the lookup map to the team array
    this.teams.forEach((team) => {
      const teamId = team.teamId;
      if (teamLookup[teamId]) {
        team.teamName = teamLookup[teamId][0];
        team.logo = teamLookup[teamId][1];
      }
    });

    // Add logo to team
    // const logoLookup = {};
  }
}
