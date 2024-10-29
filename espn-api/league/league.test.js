import { League } from "./league.js";

describe("League tests", () => {
  const myLeague = new League(946854126, 2023);

  test("testing constructor when a string is passed for the league ID and year", () => {
    const league = new League("1234", "2023");

    expect(league.leagueId).toBe(1234);
    expect(league.year).toBe(2023);
    expect(league.teams).toEqual([]);
    expect(league.members).toEqual([]);
    expect(league.draft).toEqual([]);
    expect(league.playerMap).toEqual({});
  });

  test("testing constructor when a word is passed for the league ID and year, it should always be a number", () => {
    const league = new League("test", "test");

    expect(league.leagueId).toBe(NaN);
    expect(league.year).toBe(NaN);
    expect(league.teams).toEqual([]);
    expect(league.members).toEqual([]);
    expect(league.draft).toEqual([]);
    expect(league.playerMap).toEqual({});
    expect(league.requests).toBe(null);
  });

  test("testing toString method", () => {
    expect(myLeague.toString()).toBe("League(946854126, 2023)");
  });
});
