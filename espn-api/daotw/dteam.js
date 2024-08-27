import { DPlayer } from "./dplayer.js";

export class DTeam {
  constructor(data) {
    // example of data would be from test.json in schedule.away/home
    this.teamId = data?.teamId ?? 0;
    this.teamName = "";
    this.actualScore = data?.rosterForCurrentScoringPeriod?.appliedStatTotal ?? 0;
    this.bestScore = 0;
    this.difference = 0;
    this.roster = [];

    this.fetchRoster(data.rosterForCurrentScoringPeriod);
    this.fetchBestScore();

    // the difference between the two scores rounded to the nearest hundredth
    this.difference = Math.round((this.bestScore - this.actualScore) * 100) / 100;
  }

  fetchRoster(data) {
    const roster = data?.entries ?? [];
    for (const player of roster) {
      this.roster.push(new DPlayer(player));
    }
  }

  fetchBestScore() {
    // All these variables keep track of the best score possible
    var bestScore = 0;
    var qbDone = false;
    var rbDone = false;
    var rbCount = 0;
    var wrDone = false;
    var wrCount = 0;
    var teDone = false;
    var flexDone = false;
    var kickerDone = false;
    var defDone = false;

    // Sort the roster array by score descending
    this.roster.sort((a, b) => b.pointTotal - a.pointTotal);

    for (const player of this.roster) {
      // qb check
      if (player.eligibleSlots.includes(0) && !qbDone) {
        bestScore += player.pointTotal;
        qbDone = true;
      }
      // rb check
      else if (player.eligibleSlots.includes(2) && !rbDone) {
        bestScore += player.pointTotal;
        rbCount++;
        if (rbCount == 2) {
          rbDone = true;
        }
      }
      // wr check
      else if (player.eligibleSlots.includes(4) && !wrDone) {
        bestScore += player.pointTotal;
        wrCount++;
        if (wrCount == 2) {
          wrDone = true;
        }
      }
      // te check
      else if (player.eligibleSlots.includes(6) && !teDone) {
        bestScore += player.pointTotal;
        teDone = true;
      }
      // flex check
      else if (player.eligibleSlots.includes(23) && !flexDone) {
        bestScore += player.pointTotal;
        flexDone = true;
      }
      // def check
      else if (player.eligibleSlots.includes(16) && !defDone) {
        bestScore += player.pointTotal;
        defDone = true;
      }
      // kicker check
      else if (player.eligibleSlots.includes(17) && !kickerDone) {
        bestScore += player.pointTotal;
        kickerDone = true;
      }
    }
    this.bestScore = Math.round(bestScore * 100) / 100;
  }

  fetchTeamInfo() {
    // fetch team info using this.teamId
    // return the fetched team info
  }
}
