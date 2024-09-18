import { League } from "./espn-api/league/league.js";
import { Player } from "./espn-api/player/player.js";
import { Team } from "./espn-api/team/team.js";
import { Settings } from "./espn-api/settings/settings.js";
import { EspnRequests } from "./espn-api/requests.js";
import { Daotw } from "./espn-api/daotw/daotw.js";
import express from "express";
import router from "./espn-api/routes.js";
import cors from "cors";

const app = express();
const port = 3000;

const allowedOrigins = ["http://localhost:3001"];

// app.use(
//   cors({
//     origin: "*", // Allow frontend origin
//     methods: "GET,POST,PUT,DELETE", // Allowed methods
//     allowedHeaders: ["Content-Type"] // Allowed headers
//   })
// );
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Using the imported routes
app.use("/api", router);

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
