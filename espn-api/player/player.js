import { PRO_TEAM_MAP, PLAYER_STATS_MAP, POSITION_MAP } from "../constant.js";
import json_parsing from "../util.js";

export class Player {
  constructor(data, year) {
    this.name = json_parsing(data, "fullName");
    this.playerId = json_parsing(data, "id");
    this.posRank = json_parsing(data, "positionalRanking");
    this.eligibleSlots =
      data?.playerPoolEntry?.player?.eligibleSlots.map((pos) => POSITION_MAP[pos]) ?? [];
    this.acquisitionType = json_parsing(data, "acquisitionType");
    this.proTeam = PRO_TEAM_MAP[json_parsing(data, "proTeamId")];
    this.injuryStatus = json_parsing(data, "injuryStatus");
    this.onTeamId = json_parsing(data, "onTeamId");
    this.stats = {};

    // Get players main position
    const eligibleSlots = data?.playerPoolEntry?.player?.eligibleSlots ?? "";
    for (const pos of eligibleSlots) {
      if ((pos != 25 && !POSITION_MAP[pos].includes("/")) || this.name.includes("/")) {
        this.position = POSITION_MAP[pos];
        break;
      }
    }

    // set each scoring period stat
    const player = data?.playerPoolEntry?.player ?? data.player;
    this.injuryStatus = player.injuryStatus ?? this.injuryStatus;
    this.injured = player.injured ?? false;
    this.percentOwned = (player.ownership?.percentOwned ?? -1).toFixed(2);

    const playerStats = player.stats ?? [];
    for (const stats of playerStats) {
      if (stats["seasonId"] != year) {
        continue;
      }
      const statsBreakdown = stats.stats ?? stats.appliedStats ?? {};
      const breakdown = Object.entries(statsBreakdown).reduce((acc, [k, v]) => {
        const key = PLAYER_STATS_MAP[parseInt(k)] || k;
        acc[key] = v;
        return acc;
      }, {});
      const points = (stats.appliedTotal ?? 0).toFixed(2);
      const avgPoints = (stats.appliedAverage ?? 0).toFixed(2);
      const scoringPeriod = stats.scoringPeriodId ?? 0;
      const statSource = stats.statSourceId ?? 0;

      let pointsType, breakdownType, avgType;
      if (statSource == 0) {
        pointsType = "points";
        breakdownType = "breakdown";
        avgType = "avgPoints";
      } else {
        pointsType = "projectedPoints";
        breakdownType = "projectedBreakdown";
        avgType = "projectedAvgPoints";
      }

      if (this.stats.hasOwnProperty(scoringPeriod) && this.stats[scoringPeriod]) {
        this.stats[scoringPeriod][pointsType] = points;
        this.stats[scoringPeriod][breakdownType] = breakdown;
        this.stats[scoringPeriod][avgType] = avgPoints;
      } else {
        this.stats[scoringPeriod] = {
          pointsType: points,
          breakdownType: breakdown,
          avgType: avgPoints
        };
      }

      if (!statSource) {
        if (!this.stats[scoringPeriod][breakdownType]) {
          this.activeStatus = "inactive";
        } else {
          this.activeStatus = "active";
        }
      }
    }
    this.totalPoints = this.stats["0"]?.points ?? 0;
    this.projectedTotalPoints = this.stats["0"]?.projectedPoints ?? 0;
    this.avgPoints = this.stats["0"]?.avgPoints ?? 0;
    this.projectedAvgPoints = this.stats["0"]?.projectedAvgPoints ?? 0;
  }

  toString() {
    return `Player(${this.name})`;
  }
}
