import { Daotw } from "./daotw.js";
import { daotwData } from "./testData.js";

describe("daotw test cases", () => {
  test("testing default constructor when no data is present", () => {
    const data = {};
    const daotw = new Daotw(data, 1);

    expect(daotw.teams).toEqual([]);
    expect(daotw.matchupPeriodId).toBe(1);
  });

  test("fetch teams correctly selects teams", () => {
    const daotw = new Daotw(daotwData, 1);
    expect(daotw.teams.length).toBeGreaterThan(0);
  });

  test("Check to see that team names are properly updated to not be blank", () => {
    const daotw = new Daotw(daotwData, 1);
    expect(daotw.teams[0].teamName).not.toBe("");
  });
});
