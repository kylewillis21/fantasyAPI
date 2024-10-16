import { DTeam } from "./dteam.js";
import { fetchRosterData } from "./testData.js";

describe("DTeam test cases", () => {
  test("Constructor returns defualt values on no data present", () => {
    // Constructing empty team
    const data = {};
    const team = new DTeam(data);

    // Assertions
    expect(team.teamId).toBe(0);
    expect(team.teamName).toBe("");
    expect(team.logo).toBe("");
    expect(team.actualScore).toBe(0);
    expect(team.bestScore).toBe(0);
    expect(team.difference).toBe(0);
    expect(team.roster).toEqual([]);
  });

  test("fetch roster provide an roster of x amount of players when given proper data format", () => {
    // constructing the data
    const blankData = {};

    const team = new DTeam(blankData);
    team.fetchRoster(fetchRosterData);

    expect(team.roster.length).toBeGreaterThan(0);
  });

  test("Testing to ensure the best score works correctly", () => {
    // constructing the data
    const blankData = {};
    const team = new DTeam(blankData);
    team.fetchRoster(fetchRosterData);
    team.fetchBestScore();
    expect(team.bestScore).toBe(91.72);
  });
});
