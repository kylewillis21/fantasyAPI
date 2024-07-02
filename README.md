# fantasyAPI

**PURPOSE:** This was created specifically for me to allow for data to be pulled from an ESPN fantasy football league and be stored and easily accessed.
I have future plans to incorporate this in a web application I am building that will allow users to see various charts and graphs of the data along with some other features.
It will be linked here when it is deployed.

## Documentation

**Player:** This class stores an individual player
| Variables | Type | Description |
|-----------|------|-------------|
| Name | String | Full name of the player |
| playerId | Int | Unique identifier of the player |
| posRank | Int | How they rank based on performance amongst their position |
| eligibleSlots | Array(String) | An array of positions this player can be slotted into on a roster |
| acquisitionType | String | How this player was acquired to the current team they are on |
| proTeam | String | What NFL team they play on |
| injuryStatus | string |
| onTeamId | Int | The identifier of the team they are on in the fantasy league |
| stats | | An object with the stats of the player listed out by scoring period |
| position | String | Their primary position |
| injured | bool ||
| percentOwned | String | A percentage of leagues across ESPN where this player is owned |
| activeStatus | String |
| totalPoints | Float | The total amount of points that player has scored in the given year |
| projectedTotalPoints | Float | The amount of total points this player was projected to have |
| avgPoints | Float | The average amount of points this player scores |
| projectedAvgPoints | Float | The average amount this player is projected |
