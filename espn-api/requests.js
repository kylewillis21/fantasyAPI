import fetch from "node-fetch";

export class EspnRequests {
  constructor(leagueId, year) {
    this.leagueId = leagueId;
    this.year = year;
    if (year > 2017) {
      this.endpoint = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${leagueId}`;
    } else {
      this.endpoint = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/leagueHistory/${year}?seasonId=${leagueId}`;
    }
  }

  async #getLeague(params, extend = false, extension) {
    try {
      let response;
      if (extend != false) {
        response = await fetch(this.endpoint + extension + params);
      } else {
        response = await fetch(this.endpoint + params);
      }
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Data not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else {
          throw new Error("Network response was not ok");
        }
      }
      return response.json();
    } catch (err) {
      throw err;
    }
  }

  async getAll() {
    try {
      const response = await fetch(
        this.endpoint + "?view=mTeam&view=mRoster&view=mMatchup&view=mSettings&view=mStandings"
      );
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Data not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else {
          throw new Error("Network response was not ok");
        }
      }
      return response.json();
    } catch (err) {
      throw err;
    }
  }

  async getDraft() {
    const data = await this.#getLeague("?view=mDraftDetail");
    return data;
  }

  async getTeam() {
    const data = await this.#getLeague("?view=mTeam");
    return data;
  }

  async getRoster() {
    const data = await this.#getLeague("?view=mRoster");
    return data;
  }

  async getPlayer() {
    const data = await this.#getLeague("?view=mPlayer");
    return data;
  }

  async getProPlayers() {
    const data = await this.#getLeague("?view=players_wl", true, "/players");
    return data;
  }

  async getMatchups() {
    const data = await this.#getLeague("?view=mMatchup");
    return data;
  }

  async getDaotw(scoringPeriodId) {
    const data = await this.#getLeague(
      `?scoringPeriodId=${scoringPeriodId}&view=mBoxscore&view=mMatchupScore&view=mTeam`
    );
    return data;
  }
}
