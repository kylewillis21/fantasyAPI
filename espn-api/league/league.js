import { EspnRequests } from "../requests.js";
import { Team } from "../team/team.js";
import { Pick } from "../pick/pick.js";
import { Settings } from "../settings/settings.js";

export class League {
  constructor(leagueId, year) {
    this.leagueId = leagueId;
    this.year = year;
    this.teams = [];
    this.members = [];
    this.draft = [];
    this.playerMap = {};

    this.requests = new EspnRequests(leagueId, year);
  }

  toString() {
    return `League(${this.leagueId}, ${this.year})`;
  }

  getTeamData(teamId) {
    for (const team of this.teams) {
      if (teamId == team.teamId) {
        return team;
      }
    }
    return;
  }

  async fetchLeague() {
    const data = await this.requests.getAll(); // Will be represented as a JSON

    this.currentMatchupPeriod = data["status"]["currentMatchupPeriod"];
    this.scoringPeriodId = data["scoringPeriodId"];
    this.firstScoringPeriod = data["status"]["firstScoringPeriod"];
    this.finalScoringPeriod = data["status"]["finalScoringPeriod"];
    this.previousSeasons = data["status"]["previousSeasons"].filter((year) => year < this.year);
    if (this.year < 2018) {
      this.currentWeek = data["scoringPeriodId"];
    } else {
      this.currentWeek =
        this.scoringPeriodId <= data["status"]["finalScoringPeriod"]
          ? this.scoringPeriodId
          : data["status"]["finalScoringPeriod"];
    }
    this.members = data?.members ?? [];
    this.settings = new Settings(data?.settings);

    return data;
  }

  async fetchTeams(data) {
    this.teams = [];
    const teams = data["teams"];
    const schedule = data["schedule"];
    const seasonId = data["seasonId"];
    const members = data?.members ?? [];
    const teamRoster = {};
    for (const team of data["teams"]) {
      teamRoster[team.id] = team?.roster ?? {};
    }
    for (const team of teams) {
      const roster = teamRoster[team.id];
      this.teams.push(new Team(team, seasonId, schedule));
    }
    // Sort by team id
    this.teams.sort((a, b) => a.teamId - b.teamId);
    ////////////////////////////////
    //TODO: calculate margin of victory
    for (const team of this.teams) {
      /////////////////////////////////////
      for (let week = 1; week < team.schedule.length; week++) {
        const opponent = this.getTeamData(team.schedule[week]);
        const mov = team.scores[week] - opponent.scores[week];
        team.mov.push(parseFloat(mov.toFixed(2)));
      }
    }
  }

  async fetchDraft() {
    this.draft = [];
    const data = await this.requests.getDraft();

    // Check to see if the draft has occurred
    if (!data.draftDetail.drafted) {
      return;
    }

    const picks = data.draftDetail?.picks ?? [];
    // console.log(picks);
    for (const pick of picks) {
      const team = this.getTeamData(pick.teamId);
      const playerId = pick.playerId;
      // console.log(playerId);
      let playerName = "";
      if (playerId in this.playerMap) {
        playerName = this.playerMap[playerId];
      }
      const roundNum = pick.roundId;
      const roundPick = pick.roundPickNumber;
      const bidAmount = pick.bidAmount;
      const keeperStatus = pick.keeper;
      const nominatingTeam = this.getTeamData(pick.nominatingTeamId);
      this.draft.push(
        new Pick(
          team,
          playerId,
          playerName,
          roundNum,
          roundPick,
          bidAmount,
          keeperStatus,
          nominatingTeam
        )
      );
    }
  }

  async fetchPlayers() {
    const data = await this.requests.getProPlayers();
    for (const player of data) {
      // console.log(player);
      this.playerMap[player.player.id] = player.player.fullName;
    }
  }
}
