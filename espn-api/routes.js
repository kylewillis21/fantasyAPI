import express from "express";
import { League } from "./league/league.js";
import { Daotw } from "./daotw/daotw.js";
import { EspnRequests } from "./requests/requests.js";
import { firestore } from "../firebase.js";
import { jwtDecode } from "jwt-decode";
import admin from "firebase-admin";

const routes = express.Router();

const saveLeaguesToFirestore = async (userId, leagueIds, nickname) => {
  try {
    const userRef = firestore.collection("users").doc(userId);

    const leaguesToAdd = leagueIds.map((id, index) => ({
      leagueId: id,
      leagueNickname: nickname?.[index] ?? null // optional nickname
    }));

    await userRef.set(
      {
        leagues: admin.firestore.FieldValue.arrayUnion(...leaguesToAdd)
      },
      { merge: true }
    );

    console.log(`Leagues ${leagueIds} saved for user ${userId}`);
  } catch (error) {
    console.error("Error saving leagues to Firestore", error);
    throw new Error("Failed to save league IDs");
  }
};

routes.post("/league", async (req, res) => {
  const { leagueId, nickname } = req.body;
  const token = req.headers.authorization?.split(" ")[1];

  // Check for authentication
  if (!token || !leagueId) {
    return res.status(400).json({ message: "Invalid request" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userId = decodedToken.uid;

    const leagueIds = Array.isArray(leagueId) ? leagueId : [leagueId];
    const nicknames = Array.isArray(nickname) ? nickname : [nickname];

    await saveLeaguesToFirestore(userId, leagueIds, nicknames);

    res.status(200).json({ message: "Successfully saved league" });
  } catch (error) {
    console.error("Error saving league: ", error);
    res.status(500).json({ message: "Error saving league" });
  }
});

// Need to be able to pull all leagues for a user
const fetchLeagues = async (userId) => {
  try {
    const userRef = firestore.collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      console.error(`No user found with ID: ${userId}`);
      throw new Error("User not found");
    }

    const userData = userDoc.data();
    const leagues = userData.leagues || [];
    console.log(leagues);

    return leagues;
  } catch (error) {
    console.error("Failed to fetch leagues: ", error);
    throw new Error("Failed to fetch leagues");
  }
};

routes.get("/league", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  // Check for authentication
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userId = decodedToken.uid;

    const leagues = await fetchLeagues(userId);

    if (leagues.length === 0) {
      return res.status(404).json({ message: "Leagues not found" });
    }

    res.status(200).json({ leagues });
  } catch (error) {
    console.error("Error while fetching leagues");
    res.status(500).json({ error: error });
  }
});

// Function to get all the teams from a league
routes.get("/teams/:leagueId/:year", async (req, res) => {
  const leagueId = parseInt(req.params.leagueId, 10);
  const year = parseInt(req.params.year, 10);

  const league = new League(leagueId, year);
  const data = await league.fetchLeague();
  await league.fetchTeams(data);

  res.json(league.teams);
});

// Route handler for /api/daotw/:leagueId/:year/:week
routes.get("/daotw/:leagueId/:year/:week", async (req, res) => {
  const leagueId = parseInt(req.params.leagueId, 10);
  const year = parseInt(req.params.year, 10);
  const week = parseInt(req.params.week, 10);
  // console.log(`recieved the parameters ${leagueId}, ${year}, ${week}`);

  const requests = new EspnRequests(leagueId, year);
  const data = await requests.getDaotw(week);

  const response = new Daotw(data, week);
  res.json(response);
});

routes.get("/scores/:leagueId/:year/:teamId", async (req, res) => {
  const leagueId = parseInt(req.params.leagueId, 10);
  const year = parseInt(req.params.year, 10);
  const teamId = parseInt(req.params.teamId, 10);

  const league = new League(leagueId, year);
  const leagueData = await league.fetchLeague();
  await league.fetchTeams(leagueData);

  const team = league.teams.find((team) => team.teamId === teamId);
  res.json({ teamName: team.teamName, scores: team.scores });
});

routes.get("/years/:leagueId", async (req, res) => {
  const leagueId = parseInt(req.params.leagueId, 10);

  const league = new League(leagueId, 2024); // !TODO: Change it so 2024 is not hardcoded
  const leagueData = await league.fetchLeague();

  const years = league.previousSeasons;
  years.push(2024); // !TODO: Change the hardcode here as well
  res.json({ previousSeasons: years });
});

export default routes;
