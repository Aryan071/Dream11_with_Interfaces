import { Player } from "./player";
// import { Shot } from "./shot";
import { cricketPlayerInterface } from "./interfaces";

export class cricketPlayer implements cricketPlayerInterface {
  private player: Player;
  private playingRole: string;
  private run: number = 0;
  private ball: number = 0;
  private isCaptain: boolean = false;
  private isViceCaptain: boolean = false;
  private isBat: boolean = false;
  private completedOvers: number = 0;
  private wickets: number = 0;
  private fantasyPoints: number = 0;

  constructor(id: number, name: string, credit: number, playingRole: string) {
    this.player = new Player(id, name, credit);
    this.playingRole = playingRole;
  }

  addFantasyPoints(fantasyPoints: number): void {
    this.fantasyPoints += fantasyPoints;
  }

  getFantasyPoints(): number {
    return this.fantasyPoints;
  }
  getPlayingRole(): string {
    return this.playingRole;
  }

  getisCaptain(): boolean {
    return this.isCaptain;
  }

  setisCaptain(): void {
    this.isCaptain = true;
  }
  setisViceCaptain(): void {
    this.isViceCaptain = true;
  }

  getisViceCaptain(): boolean {
    return this.isViceCaptain;
  }

  addRun(shot: number): void {
    this.run += shot;
  }

  getRun(): number {
    return this.run;
  }

  setIsBat(): void {
    this.isBat = true;
  }

  getIsBat(): boolean {
    return this.isBat;
  }

  addOvers(): void {
    this.completedOvers++;
  }

  getCompletedOvresCount(): number {
    return this.completedOvers;
  }

  addBall(): void {
    this.ball++;
  }

  getBall(): number {
    return this.ball;
  }

  addWickets(): void {
    this.wickets++;
  }

  getWickets(): number {
    return this.wickets;
  }
}
