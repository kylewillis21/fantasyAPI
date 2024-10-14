import express from "express";
import https from "https";
import fs from "fs";
import cors from "cors";

import router from "./espn-api/routes.js";

const app = express();
const port = 443;

// Middleware to parse JSON bodies
app.use(express.json());

const whitelist = ["https://fantasy-football-stats.vercel.app", "http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};
// Cors
app.use(cors(corsOptions));

//preflight
app.options("*", cors(corsOptions));

// Using the imported routes
app.use("/api", router);

const privateKey = fs.readFileSync("/etc/letsencrypt/live/api.ffhindsight.com/privkey.pem", "utf8");
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/api.ffhindsight.com/fullchain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate
};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`HTTPS Server running on port ${port}`);
});
