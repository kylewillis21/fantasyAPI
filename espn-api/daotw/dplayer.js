export class DPlayer {
  constructor(data) {
    // example of data would be in test.json schedule.away/home.rosterForCurrentScoringPeriod.entries
    this.name = data?.playerPoolEntry?.player?.fullName ?? null;
    this.lineupSlotId = data?.lineupSlotId ?? null;
    this.eligibleSlots = data?.playerPoolEntry?.player?.eligibleSlots ?? [];
    this.pointTotal = data?.playerPoolEntry?.appliedStatTotal ?? 0;
  }
}
