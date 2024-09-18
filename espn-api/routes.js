import express from "express";
import { League } from "./league/league.js";
import { Daotw } from "./daotw/daotw.js";
import { EspnRequests } from "./requests.js";
import { firestore } from "../firebase.js";
import { jwtDecode } from "jwt-decode";
import admin from "firebase-admin";

const routes = express.Router();

// Middleware to get user ID from the Auth0 access token
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No Authorization header" });
  }
  const token = authHeader.split(" ")[1];
  const decodedToken = jwtDecode(token);
  req.userId = decodedToken.sub;
  next();
};

// Save a new league for the user
routes.post("/leagues", authenticateUser, async (req, res) => {
  const { leagueId } = req.body;
  const userId = req.userId;

  try {
    // Firestore collection reference
    const userRef = firestore.collection("users").doc(userId);

    // update or create user's leagues
    await userRef.set(
      {
        leagues: admin.firestore.FieldValue.arrayUnion(leagueId)
      },
      { merge: true }
    );

    res.status(200).json({ message: "League saved successfully" });
  } catch (error) {
    console.error("Error saving league: ", error);
    res.status(500).send("Failed to save league");
  }
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
