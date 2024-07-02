// Used https://github.com/cwendt94/espn-api/blob/master/espn_api/football/constant.py as a reference for all these
export const POSITION_MAP = {
  0: "QB",
  1: "TQB",
  2: "RB",
  3: "RB/WR",
  4: "WR",
  5: "WR/TE",
  6: "TE",
  7: "OP",
  8: "DT",
  9: "DE",
  10: "DT",
  11: "DL",
  12: "CB",
  13: "S",
  14: "DB",
  15: "DP",
  16: "D/ST",
  17: "K",
  18: "P",
  19: "HC",
  20: "BE",
  21: "IR",
  22: "",
  23: "RB/WR/TE",
  24: "ER",
  25: "Rookie",
  QB: 0,
  RB: 2,
  WR: 4,
  TE: 6,
  "D/ST": 16,
  K: 17,
  FLEX: 23,
  DT: 8,
  DE: 9,
  LB: 10,
  DL: 11,
  CB: 12,
  S: 13,
  DB: 14,
  DP: 15,
  HC: 19
};

export const PRO_TEAM_MAP = {
  0: "NONE",
  1: "ATL",
  2: "BUF",
  3: "CHI",
  4: "CIN",
  5: "CLE",
  6: "DAL",
  7: "DEN",
  8: "DET",
  9: "GB",
  10: "TEN",
  11: "IND",
  12: "KC",
  13: "LV",
  14: "LAR",
  15: "MIA",
  16: "MIN",
  17: "NE",
  18: "NO",
  19: "NYG",
  20: "NYJ",
  21: "PHI",
  22: "ARI",
  23: "PIT",
  24: "LAC",
  25: "SF",
  26: "SEA",
  27: "TB",
  28: "WSH",
  29: "CAR",
  30: "JAX",
  33: "BAL",
  34: "HOU"
};

export const PLAYER_STATS_MAP = {
  // Passing stats
  0: "passingAttempts",
  1: "passingCompletions",
  2: "passingIncompletions",
  3: "passingYards",
  4: "passingTouchdowns",
  15: "passing40PlusYardTD",
  16: "passing50PlusYardTD",
  17: "passing300To399YardGame",
  18: "passing400PlusYardGame",
  19: "passing2PtConversions",
  20: "passingInterceptions",
  21: "passingCompletionPercentage",
  22: "passingYards",

  // Rushing stats
  23: "rushingAttempts",
  24: "rushingYards",
  25: "rushingTouchdowns",
  26: "rushing2PtConversions",
  35: "rushing40PlusYardTD",
  36: "rushing50PlusYardTD",
  37: "rushing100To199YardGame",
  38: "rushingYardsPerAttempt",
  39: "rushingYardsPerAttempt",
  40: "rushingYards",

  // Receiving stats
  41: "receivingReceptions",
  42: "receivingYards",
  43: "receivingTouchdowns",
  44: "receiving2PtConversions",
  45: "receiving40PlusYardTD",
  46: "receiving50PlusYardTD",
  53: "receivingReceptions",
  56: "receiving100To199YardGame",
  57: "receiving200PlusYardGame",
  58: "receivingTargets",
  59: "receivingYardsAfterCatch",
  60: "receivingYardsPerReception",
  61: "receivingYards",
  62: "2PtConversions",
  63: "fumbleRecoveredForTD",
  64: "passingTimesSacked",

  68: "fumbles",

  72: "lostFumbles",
  73: "turnovers",

  // Kicking stats
  74: "madeFieldGoalsFrom50Plus",
  75: "attemptedFieldGoalsFrom50Plus",
  76: "missedFieldGoalsFrom50Plus",
  77: "madeFieldGoalsFrom40To49",
  78: "attemptedFieldGoalsFrom40to49",
  79: "missedFieldGoalsFrom40to49",
  80: "madeFieldGoalsFromUnder40",
  81: "attemptedFieldGoalsFromUnder40",
  82: "missedFieldGoalsFromUnder40",
  83: "madeFieldGoals",
  84: "attemptedFieldGoals",
  85: "missedFieldGoals",
  86: "madeExtraPoints",
  87: "attemptedExtraPoints",
  88: "missedExtraPoints",

  // Defensive stats
  89: "defensive0PointsAllowed",
  90: "defensive1To6PointsAllowed",
  91: "defensive7To13PointsAllowed",
  92: "defensive14To17PointsAllowed",
  93: "defensiveBlockedKickForTouchdowns",
  94: "defensiveTouchdowns",
  95: "defensiveInterceptions",
  96: "defensiveFumbles",
  97: "defensiveBlockedKicks",
  98: "defensiveSafeties",
  99: "defensiveSacks",

  101: "kickoffReturnTouchdowns",
  102: "puntReturnTouchdowns",
  103: "interceptionReturnTouchdowns",
  104: "fumbleReturnTouchdowns",
  105: "defensivePlusSpecialTeamsTouchdowns",
  106: "defensiveForcedFumble",
  107: "defensiveAssistedTackles",
  108: "defensiveSoloTackles",
  109: "defensiveTotalTackles",

  113: "defensivePassesDefensed",
  114: "kickoffReturnYards",
  115: "puntReturnYards",

  118: "puntsReturned",

  120: "defensivePointsAllowed",
  121: "defensive18To21PointsAllowed",
  122: "defensive22To27PointsAllowed",
  123: "defensive28To35PointsAllowed",
  124: "defensive36To45PointsAllowed",
  125: "defensive45PlusPointsAllowed",

  127: "defensiveYardsAllowed",
  128: "defensiveLessThan100YardsAllowed",
  129: "defensive100To199YardsAllowed",
  130: "defensive200To299YardsAllowed",
  131: "defensive300To349YardsAllowed",
  132: "defensive350To399YardsAllowed",
  133: "defensive400To449YardsAllowed",
  134: "defensive450To499YardsAllowed",
  135: "defensive500To549YardsAllowed",
  136: "defensive550PlusYardsAllowed",

  // Punter Stats
  138: "netPunts",
  139: "puntYards",
  140: "puntsInsideThe10",
  141: "puntsInsideThe20",
  142: "blockedPunts",

  145: "puntTouchbacks",
  146: "puntFairCatches",
  147: "puntAverage",
  148: "puntAverage44.0+",
  149: "puntAverage42.0.43.9",
  150: "puntAverage40.0-41.9",
  151: "puntAverage38.0-39.9",
  152: "puntAverage36.0-37.9",
  153: "puntAverage34.0-35.9",
  154: "puntAverage33.9AndUnder",

  // Head Coach Stats
  155: "teamWin",
  156: "teamLoss",
  157: "teamTie",
  158: "pointsScored",

  160: "pointsMargin",
  161: "25+pointWinMargin",
  162: "20-24pointWinMargin",
  163: "15-19pointWinMargin",
  164: "10-14pointWinMargin",
  165: "5-9pointWinMargin",
  166: "1-4pointWinMargin",
  167: "1-4pointLossMargin",
  168: "5-9pointLossMargin",
  169: "10-14pointLossMargin",
  170: "15-19pointLossMargin",
  171: "20-24pointLossMargin",
  172: "25+pointLossMargin",

  174: "winPercentage",

  187: "defensivePointsAllowed",

  201: "madeFieldGoalsFrom60Plus",
  202: "attemptedFieldGoalsFrom60Plus",
  203: "missedFieldGoalsFrom60Plus",

  205: "defensive2PtReturns",
  206: "defensive2PtReturns"
};

export const SETTINGS_SCORING_FORMAT_MAP = {
  0: { abbr: "PA", label: "Each Pass Attempted" },
  1: { abbr: "PC", label: "Each Pass Completed" },
  2: { abbr: "INC", label: "Each Incomplete Pass" },
  3: { abbr: "PY", label: "Passing Yards" },
  4: { abbr: "PTD", label: "TD Pass" },
  5: { abbr: "PY5", label: "Every 5 passing yards" },
  6: { abbr: "PY10", label: "Every 10 passing yards" },
  7: { abbr: "PY20", label: "Every 20 passing yards" },
  8: { abbr: "PY25", label: "Every 25 passing yards" },
  9: { abbr: "PY50", label: "Every 50 passing yards" },
  10: { abbr: "PY100", label: "Every 100 passing yards" },
  11: { abbr: "PC5", label: "Every 5 pass completions" },
  12: { abbr: "PC10", label: "Every 10 pass completions" },
  13: { abbr: "IP5", label: "Every 5 pass incompletions" },
  14: { abbr: "IP10", label: "Every 10 pass incompletions" },
  15: { abbr: "PTD40", label: "40+ yard TD pass bonus" },
  16: { abbr: "PTD50", label: "50+ yard TD pass bonus" },
  17: { abbr: "P300", label: "300-399 yard passing game" },
  18: { abbr: "P400", label: "400+ yard passing game" },
  19: { abbr: "2PC", label: "2pt Passing Conversion" },
  20: { abbr: "INTT", label: "Interceptions Thrown" },
  21: { abbr: "CPCT", label: "Passing Completion Pct" },
  22: { abbr: "PYPG", label: "Passing Yards Per Game" },
  23: { abbr: "RA", label: "Rushing Attempts" },
  24: { abbr: "RY", label: "Rushing Yards" },
  25: { abbr: "RTD", label: "TD Rush" },
  26: { abbr: "2PR", label: "2pt Rushing Conversion" },
  27: { abbr: "RY5", label: "Every 5 rushing yards" },
  28: { abbr: "RY10", label: "Every 10 rushing yards" },
  29: { abbr: "RY20", label: "Every 20 rushing yards" },
  30: { abbr: "RY25", label: "Every 25 rushing yards" },
  31: { abbr: "RY50", label: "Every 50 rushing yards" },
  32: { abbr: "R100", label: "Every 100 rushing yards" },
  33: { abbr: "RA5", label: "Every 5 rush attempts" },
  34: { abbr: "RA10", label: "Every 10 rush attempts" },
  35: { abbr: "RTD40", label: "40+ yard TD rush bonus" },
  36: { abbr: "RTD50", label: "50+ yard TD rush bonus" },
  37: { abbr: "RY100", label: "100-199 yard rushing game" },
  38: { abbr: "RY200", label: "200+ yard rushing game" },
  39: { abbr: "RYPA", label: "Rushing Yards Per Attempt" },
  40: { abbr: "RYPG", label: "Rushing Yards Per Game" },
  41: { abbr: "RECS", label: "Receptions" },
  42: { abbr: "REY", label: "Receiving Yards" },
  43: { abbr: "RETD", label: "TD Reception" },
  44: { abbr: "2PRE", label: "2pt Receiving Conversion" },
  45: { abbr: "RETD40", label: "40+ yard TD rec bonus" },
  46: { abbr: "RETD50", label: "50+ yard TD rec bonus" },
  47: { abbr: "REY5", label: "Every 5 receiving yards" },
  48: { abbr: "REY10", label: "Every 10 receiving yards" },
  49: { abbr: "REY20", label: "Every 20 receiving yards" },
  50: { abbr: "REY25", label: "Every 25 receiving yards" },
  51: { abbr: "REY50", label: "Every 50 receiving yards" },
  52: { abbr: "RE100", label: "Every 100 receiving yards" },
  53: { abbr: "REC", label: "Each reception" },
  54: { abbr: "REC5", label: "Every 5 receptions" },
  55: { abbr: "REC10", label: "Every 10 receptions" },
  56: { abbr: "REY100", label: "100-199 yard receiving game" },
  57: { abbr: "REY200", label: "200+ yard receiving game" },
  58: { abbr: "RET", label: "Receiving Target" },
  59: { abbr: "YAC", label: "Receiving Yards After Catch" },
  60: { abbr: "YPC", label: "Receiving Yards Per Catch" },
  61: { abbr: "REYPG", label: "Receiving Yards Per Game" },
  62: { abbr: "PTL", label: "Total 2pt Conversions" },
  63: { abbr: "FTD", label: "Fumble Recovered for TD" },
  64: { abbr: "SKD", label: "Sacked" },
  65: { abbr: "PFUM", label: "Passing Fumbles" },
  66: { abbr: "RFUM", label: "Rushing Fumbles" },
  67: { abbr: "REFUM", label: "Receiving Fumbles" },
  68: { abbr: "FUM", label: "Total Fumbles" },
  69: { abbr: "PFUML", label: "Passing Fumbles Lost" },
  70: { abbr: "RFUML", label: "Rushing Fumbles Lost" },
  71: { abbr: "REFUML", label: "Receiving Fumbles Lost" },
  72: { abbr: "FUML", label: "Total Fumbles Lost" },
  73: { abbr: "TT", label: "Total Turnovers" },
  74: { abbr: "FG50P", label: "FG Made (50+ yards)" },
  75: { abbr: "FGA50P", label: "FG Attempted (50+ yards)" },
  76: { abbr: "FGM50P", label: "FG Missed (50+ yards)" },
  77: { abbr: "FG40", label: "FG Made (40-49 yards)" },
  78: { abbr: "FGA40", label: "FG Attempted (40-49 yards)" },
  79: { abbr: "FGM40", label: "FG Missed (40-49 yards)" },
  80: { abbr: "FG0", label: "FG Made (0-39 yards)" },
  81: { abbr: "FGA0", label: "FG Attempted (0-39 yards)" },
  82: { abbr: "FGM0", label: "FG Missed (0-39 yards)" },
  83: { abbr: "FG", label: "Total FG Made" },
  84: { abbr: "FGA", label: "Total FG Attempted" },
  85: { abbr: "FGM", label: "Total FG Missed" },
  86: { abbr: "PAT", label: "Each PAT Made" },
  87: { abbr: "PATA", label: "Each PAT Attempted" },
  88: { abbr: "PATM", label: "Each PAT Missed" },
  89: { abbr: "PA0", label: "0 points allowed" },
  90: { abbr: "PA1", label: "1-6 points allowed" },
  91: { abbr: "PA7", label: "7-13 points allowed" },
  92: { abbr: "PA14", label: "14-17 points allowed" },
  93: { abbr: "BLKKRTD", label: "Blocked Punt or FG return for TD" },
  94: { abbr: "DEFRETTD", label: "Fumble or INT Return for TD" },
  95: { abbr: "INT", label: "Each Interception" },
  96: { abbr: "FR", label: "Each Fumble Recovered" },
  97: { abbr: "BLKK", label: "Blocked Punt, PAT or FG" },
  98: { abbr: "SF", label: "Each Safety" },
  99: { abbr: "SK", label: "Each Sack" },
  100: { abbr: "HALFSK", label: "1/2 Sack" },
  101: { abbr: "KRTD", label: "Kickoff Return TD" },
  102: { abbr: "PRTD", label: "Punt Return TD" },
  103: { abbr: "INTTD", label: "Interception Return TD" },
  104: { abbr: "FRTD", label: "Fumble Return TD" },
  105: { abbr: "TRTD", label: "Total Return TD" },
  106: { abbr: "FF", label: "Each Fumble Forced" },
  107: { abbr: "TKA", label: "Assisted Tackles" },
  108: { abbr: "TKS", label: "Solo Tackles" },
  109: { abbr: "TK", label: "Total Tackles" },
  110: { abbr: "TK3", label: "Every 3 Total Tackles" },
  111: { abbr: "TK5", label: "Every 5 Total Tackles" },
  112: { abbr: "STF", label: "Stuffs" },
  113: { abbr: "PD", label: "Passes Defensed" },
  114: { abbr: "KR", label: "Kickoff Return Yards" },
  115: { abbr: "PR", label: "Punt Return Yards" },
  116: { abbr: "KR10", label: "Every 10 kickoff return yards" },
  117: { abbr: "KR25", label: "Every 25 kickoff return yards" },
  118: { abbr: "PR10", label: "Every 10 punt return yards" },
  119: { abbr: "PR25", label: "Every 25 punt return yards" },
  120: { abbr: "PTSA", label: "Points Allowed" },
  121: { abbr: "PA18", label: "18-21 points allowed" },
  122: { abbr: "PA22", label: "22-27 points allowed" },
  123: { abbr: "PA28", label: "28-34 points allowed" },
  124: { abbr: "PA35", label: "35-45 points allowed" },
  125: { abbr: "PA46", label: "46+ points allowed" },
  126: { abbr: "PAPG", label: "Points Allowed Per Game" },
  127: { abbr: "YA", label: "Yards Allowed" },
  128: { abbr: "YA100", label: "Less than 100 total yards allowed" },
  129: { abbr: "YA199", label: "100-199 total yards allowed" },
  130: { abbr: "YA299", label: "200-299 total yards allowed" },
  131: { abbr: "YA349", label: "300-349 total yards allowed" },
  132: { abbr: "YA399", label: "350-399 total yards allowed" },
  133: { abbr: "YA449", label: "400-449 total yards allowed" },
  134: { abbr: "YA499", label: "450-499 total yards allowed" },
  135: { abbr: "YA549", label: "500-549 total yards allowed" },
  136: { abbr: "YA550", label: "550+ total yards allowed" },
  137: { abbr: "YAPG", label: "Yards Allowed Per Game" },
  138: { abbr: "PT", label: "Net Punts" },
  139: { abbr: "PTY", label: "Punt Yards" },
  140: { abbr: "PT10", label: "Punts Inside the 10" },
  141: { abbr: "PT20", label: "Punts Inside the 20" },
  142: { abbr: "PTB", label: "Blocked Punts" },
  143: { abbr: "PTR", label: "Punts Returned" },
  144: { abbr: "PTRY", label: "Punt Return Yards" },
  145: { abbr: "PTTB", label: "Touchbacks" },
  146: { abbr: "PTFC", label: "Fair Catches" },
  147: { abbr: "PTAVG", label: "Punt Average" },
  148: { abbr: "PTA44", label: "Punt Average 44.0+" },
  149: { abbr: "PTA42", label: "Punt Average 42.0-43.9" },
  150: { abbr: "PTA40", label: "Punt Average 40.0-41.9" },
  151: { abbr: "PTA38", label: "Punt Average 38.0-39.9" },
  152: { abbr: "PTA36", label: "Punt Average 36.0-37.9" },
  153: { abbr: "PTA34", label: "Punt Average 34.0-35.9" },
  154: { abbr: "PTA33", label: "Punt Average 33.9 or less" },
  155: { abbr: "TW", label: "Team Win" },
  156: { abbr: "TL", label: "Team Loss" },
  157: { abbr: "TIE", label: "Team Tie" },
  158: { abbr: "PTS", label: "Points Scored" },
  159: { abbr: "PPG", label: "Points Scored Per Game" },
  160: { abbr: "MGN", label: "Margin of Victory" },
  161: { abbr: "WM25", label: "25+ point Win Margin" },
  162: { abbr: "WM20", label: "20-24 point Win Margin" },
  163: { abbr: "WM15", label: "15-19 point Win Margin" },
  164: { abbr: "WM10", label: "10-14 point Win Margin" },
  165: { abbr: "WM5", label: "5-9 point Win Margin" },
  166: { abbr: "WM1", label: "1-4 point Win Margin" },
  167: { abbr: "LM1", label: "1-4 point Loss Margin" },
  168: { abbr: "LM5", label: "5-9 point Loss Margin" },
  169: { abbr: "LM10", label: "10-14 point Loss Margin" },
  170: { abbr: "LM15", label: "15-19 point Loss Margin" },
  171: { abbr: "LM20", label: "20-24 point Loss Margin" },
  172: { abbr: "LM25", label: "25+ point Loss Margin" },
  173: { abbr: "MGNPG", label: "Margin of Victory Per Game" },
  174: { abbr: "WINPCT", label: "Winning Pct" },
  175: { abbr: "PTD0", label: "0-9 yd TD pass bonus" },
  176: { abbr: "PTD10", label: "10-19 yd TD pass bonus" },
  177: { abbr: "PTD20", label: "20-29 yd TD pass bonus" },
  178: { abbr: "PTD30", label: "30-39 yd TD pass bonus" },
  179: { abbr: "RTD0", label: "0-9 yd TD rush bonus" },
  180: { abbr: "RTD10", label: "10-19 yd TD rush bonus" },
  181: { abbr: "RTD20", label: "20-29 yd TD rush bonus" },
  182: { abbr: "RTD30", label: "30-39 yd TD rush bonus" },
  183: { abbr: "RETD0", label: "0-9 yd TD rec bonus" },
  184: { abbr: "RETD10", label: "10-19 yd TD rec bonus" },
  185: { abbr: "RETD20", label: "20-29 yd TD rec bonus" },
  186: { abbr: "RETD30", label: "30-39 yd TD rec bonus" },
  187: { abbr: "DPTSA", label: "D/ST Points Allowed" },
  188: { abbr: "DPA0", label: "D/ST 0 points allowed" },
  189: { abbr: "DPA1", label: "D/ST 1-6 points allowed" },
  190: { abbr: "DPA7", label: "D/ST 7-13 points allowed" },
  191: { abbr: "DPA14", label: "D/ST 14-17 points allowed" },
  192: { abbr: "DPA18", label: "D/ST 18-21 points allowed" },
  193: { abbr: "DPA22", label: "D/ST 22-27 points allowed" },
  194: { abbr: "DPA28", label: "D/ST 28-34 points allowed" },
  195: { abbr: "DPA35", label: "D/ST 35-45 points allowed" },
  196: { abbr: "DPA46", label: "D/ST 46+ points allowed" },
  197: { abbr: "DPAPG", label: "D/ST Points Allowed Per Game" },
  198: { abbr: "FG50", label: "FG Made (50-59 yards)" },
  199: { abbr: "FGA50", label: "FG Attempted (50-59 yards)" },
  200: { abbr: "FGM50", label: "FG Missed (50-59 yards)" },
  201: { abbr: "FG60", label: "FG Made (60+ yards)" },
  202: { abbr: "FGA60", label: "FG Attempted (60+ yards)" },
  203: { abbr: "FGM60", label: "FG Missed (60+ yards)" },
  204: { abbr: "O2PRET", label: "Offensive 2pt Return" },
  205: { abbr: "D2PRET", label: "Defensive 2pt Return" },
  206: { abbr: "2PRET", label: "2pt Return" },
  207: { abbr: "O1PSF", label: "Offensive 1pt Safety" },
  208: { abbr: "D1PSF", label: "Defensive 1pt Safety" },
  209: { abbr: "1PSF", label: "1pt Safety" },
  210: { abbr: "GP", label: "Games Played" },
  211: { abbr: "PFD", label: "Passing First Down" },
  212: { abbr: "RFD", label: "Rushing First Down" },
  213: { abbr: "REFD", label: "Receiving First Down" },
  214: { abbr: "FGY", label: "FG Made Yards" },
  215: { abbr: "FGMY", label: "FG Missed Yards" },
  216: { abbr: "FGAY", label: "FG Attempt Yards" },
  217: { abbr: "FGY5", label: "Every 5 FG Made yards" },
  218: { abbr: "FGY10", label: "Every 10 FG Made yards" },
  219: { abbr: "FGY20", label: "Every 20 FG Made yards" },
  220: { abbr: "FGY25", label: "Every 25 FG Made yards" },
  221: { abbr: "FGY50", label: "Every 50 FG Made yards" },
  222: { abbr: "FGY100", label: "Every 100 FG Made yards" },
  223: { abbr: "FGMY5", label: "Every 5 FG Missed yards" },
  224: { abbr: "FGMY10", label: "Every 10 FG Missed yards" },
  225: { abbr: "FGMY20", label: "Every 20 FG Missed yards" },
  226: { abbr: "FGMY25", label: "Every 25 FG Missed yards" },
  227: { abbr: "FGMY50", label: "Every 50 FG Missed yards" },
  228: { abbr: "FGMY100", label: "Every 100 FG Missed yards" },
  229: { abbr: "FGAY5", label: "Every 5 FG Attempt yards" },
  230: { abbr: "FGAY10", label: "Every 10 FG Attempt yards" },
  231: { abbr: "FGAY20", label: "Every 20 FG Attempt yards" },
  232: { abbr: "FGAY25", label: "Every 25 FG Attempt yards" },
  233: { abbr: "FGAY50", label: "Every 50 FG Attempt yards" },
  234: { abbr: "FGAY100", label: "Every 100 FG Attempt yards" }
};
