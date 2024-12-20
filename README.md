# fantasyAPI

**PURPOSE:** This was created specifically for me to allow for data to be pulled from an ESPN fantasy football league and be stored and easily accessed. I have future plans to incorporate this in a web application I am building that will allow users to see various charts and graphs of the data along with some other features. 

It will be linked here when it is deployed.

# Table of Contents
1. [Documentation](#documentation)
    - [Player](#player)
    - [Pick](#pick)
    - [Team](#team)
    - [League](#league)
    - [EspnRequests](#espnrequests)
    - [Settings](#settings)
    - [Matchup](#matchup)

## Documentation

## Player

This class stores an individual player

| Variables | Type | Description |
|-----------|------|-------------|
| **name** | String | Full name of the player |
| **playerId** | Int | Unique identifier of the player |
| **posRank** | Int | How they rank based on performance amongst their position |
| **eligibleSlots** | Array(String) | An array of positions this player can be slotted into on a roster |
| **acquisitionType** | String | How this player was acquired to the current team they are on |
| **proTeam** | String | What NFL team they play on |
| **injuryStatus** | string |
| **onTeamId** | Int | The identifier of the team they are on in the fantasy league |
| **stats** | Object | An object with the stats of the player listed out by scoring period |
| **position** | String | Their primary position |
| **injured** | bool ||
| **percentOwned** | String | A percentage of leagues across ESPN where this player is owned |
| **activeStatus** | String |
| **totalPoints** | Float | The total amount of points that player has scored in the given year |
| **projectedTotalPoints** | Float | The amount of total points this player was projected to have |
| **avgPoints** | Float | The average amount of points this player scores |
| **projectedAvgPoints** | Float | The average amount this player is projected |

Member functions of the Player class

| Methods  | Parameters | Return Type | Description |
| -------- | ---------- | ----------- | ----------- |
| **toString** | None | String | Returns a string with the format 'Player($name)' |

## Pick

This class stores an individual pick of a draft

| Variables | Type | Description |
|-----------|------|-------------|
| **team** | Team | The team that picked this player in the draft |
| **playerId** | Int | The unique identifier of the player |
| **playerName** | String | The full name of the player |
| **roundNum** | Int | What round this player was picked in |
| **roundPick** | Int | What pick of the round this player was |
| **bidAmount** | Int | The amount bidded on this player |
| **keeperStatus** | bool | Whether this player is a keeper |
| **nominatingTeam** | Int | The ID of the nominating team|

## Team

This class stores a team that is apart of the league. All variables stored are from the season of the league.

| Variables | Type | Description |
|-----------|------|-------------|
| **teamId** | Int | The unique identifier of the team |
| **teamAbbrev** | String | The abbreviation of the team |
| **teamName** | String | The name of the team |
| **divisionId** | Int | The unique identifier of the division that this team belongs to |
| **wins** | Int | The number of wins this team has this season |
| **losses** | Int | The number of losses this team has this season |
| **ties** | Int | The number of ties this team has this season |
| **pointsFor** | Float | The number of points this team has scored in total this season |
| **pointsAgainst** | Float | The number of points that have been scored on this team this season |
| **acquisitions** | Int | The number of acquisitions this team has made on the season |
| **acquisitionBudgetSpent** | Float | How much of the teams budget has been spent so far on aquisitions |
| **drops** | Int | The number of players dropped from this team |
| **trades** | Int | The number of trades this team has made |
| **playoffPct** | Float | The percentage that this team makes the playoffs (Will be 0 if the season is not currently active) |
| **draftProjectedRank** | Int | The projected finishing rank of this team directly after the draft |
| **streakType** | String | Whether this team is currently on a winning or losing streak |
| **standing** | Int | The teams current standing |
| **logoUrl** | String | The url of the logo the team uses |
| **roster** | Array(Player) | An array of players that belong to this team ([See player](#player)) |
| **schedule** | Array(Int) | An array of the teams id this team will play against in order |
| **scores** | Array(Float) | An array of scores this team has put up throughout the season in order |
| **outcomes** | Array(Char) | An array of outcomes of the games played throughout the season (Win = 'W', Lose = 'L', Undecided = 'U') |
| **mov** | Array(Float) | An array of the margin of victory (negative number means they lost that week) each week |

Member functions of the Team class

| Methods  | Parameters | Return Type | Description |
| -------- | ---------- | ----------- | ----------- |
| **toString** | None | String | Returns a string with the format 'Team($this)' |
| **fetchRoster** | (Object) data, (Int) year | None | Updates the roster of the team to the current roster |
| **fetchSchedule** | (Object) data | None | Updates the teams schedule to match the current |
| **getWinner** |(String) winner, (bool) isAway | String | A helper function to determine whether the team won or loss their matchup for the given week |
| **getPlayerName** | (Int) playerId | String | Returns the name of the player given the ID of the player |

## League

A class representing any given year of a leauge and the teams of that league

| Variables | Type | Description |
|-----------|------|-------------|
| **leagueId** | Int | A unique identifier of the league |
| **year** | Int | The year that this league took place |
| **teams** | Array(Team) | An array of all the teams participating in the league ([See team](#team))|
| **members** | Array(Object) | An array of all the members of the league and their info |
| **draft** | Array(Pick) | An array of all the picks made in the draft of this league ([See pick](#pick)) |
| **playerMap** | Object | An object of all the players full names mapped to their unique identifier |
| **requests** | EspnRequests | Made up of EspnRequest class, it is used to make all of the calls to ESPN and pull data ([see requests](#espnrequests)) |
| **currentMatchupPeriod** | Int | The id of the current matchup period, typically week 1 = 1, etc... |
| **scoringPeriodId** | Int | The id of the scoring period, this can vary from currentMatchupPeriod if leagues have matches that last multiple weeks |
| **firstScoringPeriod** | Int | The first scoring period of the season, typically will always be 1 |
| **finalScoringPeriod** | Int | The final scoring period of the season |
| **previousSeasons** | Array(Int) | An array of previous seasons if this is not this leagues first season |
| **currentWeek** | Int | The current week of the NFL season |
| **settings** | Settings | The saved scoring settings of a given league ([See settings](#settings))|

| Methods  | Parameters | Return Type | Description |
| -------- | ---------- | ----------- | ----------- |
| **toString** | None | String | Returns a string with the format 'League({leagueId}, {year})' |
| **getTeamData** | (Int) teamId | Team | Returns the team that matches the teamId |
| *async* **fetchLeague** | None | Object | Updates the league with the most recent data, returns the data object that it uses |
| *async* **fetchTeams** | (object) Data | None | Updates all of the teams based on the data passed through the function. Typically this data is the one returned from fetchLeague |
| *async* **fetchDraft** | None | None | Updates the leagues draft with all the picks |
| *async* **fetchPlayers** | None | None | Maps all of the professional players to their unique IDs |
| *async* **fetchScoreboard** | (Int) week | Array(Matchup) | Returns all of the matchups of the league in a given week |

 
## EspnRequests

A class that allows for all of the needed requests to ESPN to pull data from

| Variables | Type | Description |
|-----------|------|-------------|
| **leagueId** | Int | The unique identifier of the ESPN fantasy league to pull data from |
| **year** | Int | The year from which to request data from |
| **endpoint** | String | A constant used when making requests |

| Methods  | Parameters | Return Type | Description |
| -------- | ---------- | ----------- | ----------- |
| *async* **getAll** | None | JSON | Requests a JSON of all the information needed for this API |
| *async* **getDraft** | None | JSON | Requests a JSON of the draft information from ESPN servers |
| *async* **getRoster** | None | JSON | Requests a JSON of the roster information for each team |
| *async* **getPlayer** | None | JSON | Requests a JSON of all the members of the league and their team information |
| *async* **getProPlayers** | None | JSON | requests a JSON of all the professional players to help for better mapping |
| *async* **getMatchups** | None | JSON | requests a JSON all league matchups |

## Settings

The scoring settings for the league along with some other settings for acquisitions and trades

| Variables | Type | Description |
|-----------|------|-------------|
| **regSeasonCount** | Int | Number of matchup periods there are in the season |
| **matchupPeriods** | Object | A mapping of matchup periods and their corresponding scoring periods. One matchup period can have multiple scoring periods if the matchup lasts longer than a week | 
| **vetoVotesRequired** | Int | Number of votes required in the league to veto a trade |
| **teamCount** | Int | The number of teams in the league |
| **playoffTeamCount** | Int | The number of teams that make the playoffs |
| **keeperCount** | Int | The number of players a manager can mark as a keeper |
| **tradeDeadline** | Int | |
| **divisionMap** | Object | An object that maps out division names to their respective ID |
| **name** | String | The name of the league |
| **tieRule** | String | The rule used in case of tie |
| **playoffTieRule** | String | The rule used in case of tie in playoffs |
| **playoffMatchupPeriodLength** | Int | How long each matchup period lasts in the playoffs |
| **playoffSeedTieRule** | String | The rule used in case of a playoff seeding tie |
| **faab** | bool | |
| **scoringFormat** | Array(Object) | An array of objects containing rules for scoring |
| **positionSlotCounts** | Object | Contains how many of each position a player can play at a time |

## Matchup

This class represents a single matchup in a given matchup period

| Variables | Type | Description |
|-----------|------|-------------|
| **homeTeamId** | Int | The unique identifier of the team that represents the home team in this matchup |
| **awayTeamId** | Int | The unique identifier of the team that represents the away team in this matchup |
| **homeScore** | Float | The score put up by the home team in the matchup |
| **awayScore** | Float | The score put up by the away team in the matchup |
| **homeTeam** | Team | The team that represents the home team ([See team](#team)) |
| **awayTeam** | Team | The team that represents the away team ([See team](#team)) |