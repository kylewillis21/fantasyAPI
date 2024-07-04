import { POSITION_MAP, PRO_TEAM_MAP, PLAYER_STATS_MAP } from "../constant.js";
import Player from "../player/player.js";

export class BoxPlayer extends Player {
  // Player with extra data from a matchup
  constructor(data, proSchedule, posRankings, week, year) {
    super(data, year);
    this.slotPosition = "FA";
    this.proOpponent = "None";
    this.proPosRank = 0;
    this.gamePlayed = 100; // Percentage of game played
    this.onByeWeek = false;

    this.slotPosition = POSITION_MAP[data.lineupSlotId ?? 20]; // 20 puts them on the bench in case it can't be found

    const player = data?.playerPoolEntry?.player ?? data.player;
    if (player.proTeamId in proSchedule) {
      const [oppId, date] = proSchedule[player.proTeamId];
      this.gameDate = new Date(date);
      this.gamePlayed =
        new Date() > new Date(this.gameDate.getTime() + 3 * 60 * 60 * 1000) ? 100 : 0;
      const posId = String(player.defaultPositionId);
      if (posId in posRankings) {
        this.proOpponent = PRO_TEAM_MAP[oppId];
        this.proPosRank = posRankings[posId][String(oppId)];
      }
    } else {
      this.onByeWeek = true;
    }
  }
}
