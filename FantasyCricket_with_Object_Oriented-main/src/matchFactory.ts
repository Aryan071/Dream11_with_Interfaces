import { Cricket } from "./cricket";
import { Dream11 } from "./dream11Shot";
import { Football } from "./football";
import { teamInterface } from "./interfaces";
import { MyCric11 } from "./myCric11Shot";

export class matchFactory {
  private myCric11Platform!: MyCric11;
  private dream11Platform!: Dream11;
  createMatch(matchType: number, team1: teamInterface, team2: teamInterface) {
    switch (matchType) {
      case 11:
        return new Cricket(team1, team2, this.myCric11Platform);
      case 12:
        return new Cricket(team1, team2, this.dream11Platform);
      case 21:
        return new Football(team1, team2, this.myCric11Platform);
      case 22:
        return new Football(team1, team2, this.dream11Platform);
      default:
        console.log("Invalid answer!");
        break;
    }
  }
}
