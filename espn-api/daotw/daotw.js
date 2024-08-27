import { DTeam } from "./dteam.js";

export class Daotw {
  constructor(data, matchupPeriodId) {
    this.teams = [];
    this.matchupPeriodId = matchupPeriodId;

    this.fetchTeams(data?.schedule ?? []);
    this.updateTeamNames();
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

  updateTeamNames() {}
}
