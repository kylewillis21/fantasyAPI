import express from "express";
import https from "https";
import fs from "fs";

import router from "./espn-api/routes.js";

const app = express();
const port = 443;

// Middleware to parse JSON bodies
app.use(express.json());
// Using the imported routes
app.use("/api", router);

const privateKey = fs.readFileSync("./key.pem", "utf8");
const certificate = fs.readFileSync("./cert.pem", "utf8");

const credentials = {
  key: privateKey,
  cert: certificate
};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`HTTPS Server running on port ${port}`);
});

// import { League } from "./espn-api/league/league.js";
// import { Player } from "./espn-api/player/player.js";
// import { Team } from "./espn-api/team/team.js";
// import { Settings } from "./espn-api/settings/settings.js";
// import { EspnRequests } from "./espn-api/requests.js";
// import { Daotw } from "./espn-api/daotw/daotw.js";
// import express from "express";
// import router from "./espn-api/routes.js";
// import cors from "cors";
// import https from "https";

// const app = express();
// const port = 443;

// // app.use(
// //   cors({
// //     origin: "*", // Allow frontend origin
// //     methods: "GET,POST,PUT,DELETE", // Allowed methods
// //     allowedHeaders: ["Content-Type"] // Allowed headers
// //   })
// // );
// app.use(cors());

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Using the imported routes
// app.use("/api", router);

// app.listen(port, () => {
//   console.log(`API is running at http://localhost:${port}`);
// });
