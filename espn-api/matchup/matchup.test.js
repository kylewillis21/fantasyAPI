import { Matchup } from "./matchup";

describe("Matchup tests", () => {
  test("Should return [0, 0] when the input team is not found in the data", () => {
    const data = {};

    const matchup = new Matchup(data);
    expect(matchup.homeTeamId).toBe(0);
    expect(matchup.homeScore).toBe(0);
    expect(matchup.awayTeamId).toBe(0);
    expect(matchup.awayScore).toBe(0);
  });

  test("Should correctly return the matchup info when given proper data", () => {
    const data = {
      home: { teamId: 1, totalPoints: 10 },
      away: { teamId: 2, totalPoints: 20 }
    };

    const matchup = new Matchup(data);
    expect(matchup.homeTeamId).toBe(1);
    expect(matchup.homeScore).toBe(10);
    expect(matchup.awayTeamId).toBe(2);
    expect(matchup.awayScore).toBe(20);
  });
});
