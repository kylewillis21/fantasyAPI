import { POSITION_MAP, SETTINGS_SCORING_FORMAT_MAP } from "../constant.js";

export class Settings {
  constructor(data) {
    this.regSeasonCount = data?.scheduleSettings?.matchupPeriodCount ?? undefined;
    this.matchupPeriods = data?.scheduleSettings?.matchupPeriods ?? undefined;
    this.vetoVotesRequired = data?.tradeSettings?.vetoVotesRequired ?? undefined;
    this.teamCount = data?.size ?? undefined;
    this.playoffTeamCount = data?.scheduleSettings?.playoffTeamCount ?? undefined;
    this.keeperCount = data?.draftSettings?.keeperCount ?? undefined;
    this.tradeDeadline = 0;
    this.divisionMap = {};
    this.tradeDeadline = data?.tradeSettings.deadlineDate ?? undefined;
    this.name = data?.name ?? undefined;
    this.tieRule = data?.scoringSettings?.matchupTieRule ?? undefined;
    this.playoffTieRule = data?.scoringSettings?.playoffMatchupTieRule ?? undefined;
    this.playoffMatchupPeriodLength = data?.scheduleSettings?.playoffMatchupPeriodLength ?? 0;
    this.playoffSeedTieRule = data?.scheduleSettings?.playoffSeedingRule ?? undefined;
    this.scoringType = data?.scoringSettings?.scoringType ?? undefined;
    this.faab = data?.acquisitionSettings?.isUsingAcquisitionBudget ?? undefined;

    const divisions = data?.scheduleSettings?.divisions ?? [];
    for (const div of divisions) {
      const id = div.id || 0;
      const name = div.name || null;
      this.divisionMap[id] = name;
    }

    this.scoringFormat = [];
    const lineupSlotCounts = data?.rosterSettings?.lineupSlotCounts ?? {};
    const positionLabels = Object.values(POSITION_MAP).slice(
      0,
      Object.keys(lineupSlotCounts).length
    );

    this.positionSlotCounts = {};
    positionLabels.forEach((label, index) => {
      const key = Object.keys(lineupSlotCounts)[index];
      this.positionSlotCounts[label] = lineupSlotCounts[key];
    });

    const scoringItems = data?.scoringSettings?.scoringItems ?? [];
    for (const scoringItem of scoringItems) {
      console.log(scoringItem);
      const statId = scoringItem.statId;
      const pointsOverride = scoringItem.pointsOverrides?.[16] ?? {};

      const scoringType = SETTINGS_SCORING_FORMAT_MAP[statId] ?? {
        abbr: "Unknown",
        label: "Unknown"
      };
      scoringType.id = statId;
      scoringType.points = pointsOverride ?? scoringItem.points ?? 0;
      this.scoringFormat.push(scoringType);
    }
  }
}
