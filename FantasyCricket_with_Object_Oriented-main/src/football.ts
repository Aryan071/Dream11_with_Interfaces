import { Dream11 } from "./dream11Shot";
import { matchInterface, teamInterface } from "./interfaces";
import { MyCric11 } from "./myCric11Shot";

export class Football implements matchInterface {
  private attackingTeam: teamInterface;
  private defendingTeam: teamInterface;
  private gamingPlatform: MyCric11 | Dream11;
  constructor(
    team1: teamInterface,
    team2: teamInterface,
    gameingPlatform: MyCric11 | Dream11
  ) {
    this.isTeamNameSame(team1, team2);
    this.attackingTeam = team1;
    this.defendingTeam = team2;
    this.gamingPlatform = gameingPlatform;
    console.log(
      "Football match is played between " +
        team1.getName() +
        " and " +
        team2.getName()
    );
  }

  isTeamNameSame(team1: teamInterface, team2: teamInterface): void {
    if (team1.getName() == team2.getName())
      throw new Error("Duplicate Team names are not allowed");
  }

  flipToss(): void {
    let headsOrTails = Math.floor(Math.random() * 2);
    if (headsOrTails == 0) {
      let temp: teamInterface = this.attackingTeam;
      this.attackingTeam = this.defendingTeam;
      this.defendingTeam = temp;
    }
    
  }
  getTeam1(): teamInterface {
    return this.attackingTeam;
  }
  getTeam2(): teamInterface {
    return this.defendingTeam;
  }
}
