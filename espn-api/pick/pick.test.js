import { Pick } from "./pick.js";

describe("Pick tests", () => {
  test("Create a new pick", () => {
    const pick = new Pick(1, 12, "Test Player", 1, 1, 0, false, 1);

    expect(pick.team).toBe(1);
    expect(pick.playerId).toBe(12);
    expect(pick.playerName).toBe("Test Player");
    expect(pick.roundNum).toBe(1);
    expect(pick.roundPick).toBe(1);
    expect(pick.bidAmount).toBe(0);
    expect(pick.keeperStatus).toBe(false);
    expect(pick.nominatingTeam).toBe(1);
  });
});
