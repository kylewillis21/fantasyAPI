import { DPlayer } from "./dplayer.js";

describe("DPlayer test cases", () => {
  test("constructor should return default values when no playerPoolEntry is in the data", () => {
    const data = {
      lineupSlotId: 1
    };
    const player = new DPlayer(data);
    expect(player.name).toBe(null);
    expect(player.pointTotal).toBe(0);
    expect(player.lineupSlotId).toBe(1);
    expect(player.eligibleSlots).toEqual([]);
  });

  test("constructor should return all default values when empty data is passed", () => {
    const data = {};
    const player = new DPlayer(data);
    expect(player.name).toBe(null);
    expect(player.pointTotal).toBe(0);
    expect(player.lineupSlotId).toBe(null);
    expect(player.eligibleSlots).toEqual([]);
  });

  test("constructor should correctly parse data", () => {
    const data = {
      lineupSlotId: 1,
      playerPoolEntry: {
        player: {
          fullName: "Test Player",
          eligibleSlots: [23, 16, 17]
        },
        appliedStatTotal: 100
      }
    };
    const player = new DPlayer(data);
    expect(player.name).toBe("Test Player");
    expect(player.pointTotal).toBe(100);
    expect(player.lineupSlotId).toBe(1);
    expect(player.eligibleSlots).toEqual([23, 16, 17]);
  });
});
