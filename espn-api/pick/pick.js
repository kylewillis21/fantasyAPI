export class Pick {
  constructor(team, playerId, playerName, roundNum, roundPick, bidAmount, keeperStatus, nominatingTeam) {
    this.team = team; // TODO: Make this the team id instead of the whole team
    this.playerId = playerId;
    this.playerName = playerName;
    this.roundNum = roundNum;
    this.roundPick = roundPick;
    this.bidAmount = bidAmount;
    this.keeperStatus = keeperStatus;
    this.nominatingTeam = nominatingTeam;
  }
}
