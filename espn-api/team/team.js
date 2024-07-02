import { Player } from "../player/player.js";

export class Team {
  constructor(data, year, schedule, ...args) {
    //   constructor(data, roster, schedule, year, ...args) {
    this.teamId = data["id"];
    this.teamAbbrev = data["abbrev"];
    this.teamName = data?.name ?? "Unknown";
    this.divisionId = data["divisionId"];
    this.wins = data["record"]["overall"]["wins"];
    this.losses = data["record"]["overall"]["losses"];
    this.ties = data["record"]["overall"]["ties"];
    this.pointsFor = parseFloat(data["record"]["overall"]["pointsFor"].toFixed(2));
    this.pointsAgainst = parseFloat(data["record"]["overall"]["pointsAgainst"].toFixed(2));
    this.acquisitions = data?.transactionCounter?.acquisitions ?? 0;
    this.acquisitionBudgetSpent = data?.transactionCounter.acquisitionBudgetSpent ?? 0;
    this.drops = data?.transactionCounter?.drops ?? 0;
    this.trades = data?.transactionCounter?.trades ?? 0;
    this.playoffPct = data?.currentSimulationResults?.playoffPct ?? 0;
    this.draftProjectedRank = data?.draftDayProjectedRank ?? 0;
    this.streakLength - data?.record?.overall?.streakLength ?? 0;
    this.streakType = data?.record?.overall?.streakType ?? "N/A";
    this.standing = data?.playoffSeed ?? 0;
    this.logoUrl = data?.logo ?? "";
    this.roster = [];
    this.schedule = [];
    this.scores = [];
    this.outcomes = [];
    this.mov = []; // Margin of Victory
    this.fetchRoster(data, year);
    this.fetchSchedule(schedule);
  }

  toString() {
    return `Team(${this.team})`;
  }

  fetchRoster(data, year) {
    this.roster = [];
    const roster = data?.roster?.entries ?? [];
    // console.log(roster);

    for (const player of roster) {
      this.roster.push(new Player(player, year));
    }
  }

  fetchSchedule(data) {
    //TODO: this
    for (const matchup of data) {
      const homeTeam = matchup.home;
      const awayTeam = matchup.away;
      const homeId = homeTeam?.teamId ?? -1; // -1 represents a bye week
      const awayId = awayTeam?.teamId ?? -1; // -1 represents a bye week

      if (this.teamId == homeId || this.teamId == awayId) {
        let currentTeam, opponentId, away;
        if (this.teamId == homeId) {
          currentTeam = homeTeam;
          opponentId = awayId;
          away = false;
        } else {
          currentTeam = awayTeam;
          opponentId = homeId;
          away = true;
        }

        if (opponentId == -1) {
          opponentId = this.teamId;
        }

        const score = currentTeam.totalPoints ?? 0;
        this.outcomes.push(this.getWinner(matchup.winner, away));
        this.scores.push(score);
        this.schedule.push(opponentId);
      }
    }
  }

  getWinner(winner, isAway) {
    if (winner === "UNDECIDED") {
      return "U";
    } else if ((isAway && winner === "AWAY") || (!isAway && winner === "HOME")) {
      return "W";
    } else {
      return "L";
    }
  }

  getPlayerName(playerId) {
    for (const player in this.roster) {
      if (player.playerId == playerId) {
        return player.name;
      }
    }
  }
}
