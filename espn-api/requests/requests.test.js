import { EspnRequests } from "./requests";
import fetch from "node-fetch";

jest.mock("node-fetch", () => jest.fn());

describe("EspnRequests return tests", () => {
  let espnRequests;

  beforeEach(() => {
    espnRequests = new EspnRequests(946854126, 2023);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("tests the correct endpoint for a year > 2017", () => {
    const expectedEndpoint =
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/946854126";
    expect(espnRequests.endpoint).toBe(expectedEndpoint);
  });

  test("tests the correct endpoint for a year <= 2017", () => {
    const oldLeagueRequests = new EspnRequests(946854126, 2017);
    const expectedEndpoint =
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/leagueHistory/2017?seasonId=946854126";
    expect(oldLeagueRequests.endpoint).toBe(expectedEndpoint);
  });

  test("getAll returns something", async () => {
    // Mocking a successful response
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ teams: [] }),
      ok: true
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getAll();

    expect(fetch).toHaveBeenCalledWith(
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/946854126?view=mTeam&view=mRoster&view=mMatchup&view=mSettings&view=mStandings"
    );
    expect(result).toEqual({ teams: [] });
  });

  test("getDraft calls correct endpoint and returns data", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ players: [] }),
      ok: true
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getDraft();

    expect(fetch).toHaveBeenCalledWith(
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/946854126?view=mDraftDetail"
    );
    expect(result).toEqual({ players: [] });
  });

  test("getTeam calls correct endpoint and returns data", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ team: [] }),
      ok: true
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getTeam();

    expect(fetch).toHaveBeenCalledWith(
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/946854126?view=mTeam"
    );
    expect(result).toEqual({ team: [] });
  });

  test("getRoster calls correct endpoint and returns data", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ roster: [] }),
      ok: true
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getRoster();

    expect(fetch).toHaveBeenCalledWith(
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/946854126?view=mRoster"
    );
    expect(result).toEqual({ roster: [] });
  });

  test("getPlayer calls correct endpoint and returns data", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ player: [] }),
      ok: true
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getPlayer();

    expect(fetch).toHaveBeenCalledWith(
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/946854126?view=mPlayer"
    );
    expect(result).toEqual({ player: [] });
  });

  test("getProPlayers calls correct endpoint and returns data", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ players: [] }),
      ok: true
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getProPlayers();

    expect(fetch).toHaveBeenCalledWith(
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/946854126/players?view=players_wl"
    );
    expect(result).toEqual({ players: [] });
  });

  test("getMatchups calls correct endpoint and returns data", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ matchups: [] }),
      ok: true
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getMatchups();

    expect(fetch).toHaveBeenCalledWith(
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/946854126?view=mMatchup"
    );
    expect(result).toEqual({ matchups: [] });
  });

  test("getDaotw calls correct endpoint and returns data", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ team: [] }),
      ok: true
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getDaotw(3);

    expect(fetch).toHaveBeenCalledWith(
      "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/946854126?scoringPeriodId=3&view=mBoxscore&view=mMatchupScore&view=mTeam"
    );
    expect(result).toEqual({ team: [] });
  });
});

describe("EspnRequests error tests", () => {
  let espnRequests;

  beforeEach(() => {
    espnRequests = new EspnRequests(946854126, 2023);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getAll handles 404 response correctly", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    const mockResponse = {
      ok: false,
      status: 404
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getAll();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith("Data not found");

    consoleErrorSpy.mockRestore();
  });

  test("getAll handles 500 response correctly", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    const mockResponse = {
      ok: false,
      status: 500
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getAll();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith("Server error");

    consoleErrorSpy.mockRestore();
  });

  test("getAll handles all other response correctly", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    const mockResponse = {
      ok: false,
      status: 406
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await espnRequests.getAll();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith("Network response was not ok");

    consoleErrorSpy.mockRestore();
  });
});
