export class Matchup {
  constructor(data) {
    const [homeTeamId, homeScore] = this.#fetchMatchupInfo(data, "home");
    this.homeTeamId = homeTeamId;
    this.homeScore = homeScore;
    this.homeTeam = null;

    const [awayTeamId, awayScore] = this.#fetchMatchupInfo(data, "away");
    this.awayTeamId = awayTeamId;
    this.awayScore = awayScore;
    this.awayTeam = null;
  }

  #fetchMatchupInfo(data, team) {
    if (!(team in data)) {
      return [0, 0];
    }

    const teamId = data[team]["teamId"];
    const teamScore = data[team]["totalPoints"];
    // return the score and id as a tuple
    return [teamId, teamScore];
  }
}
