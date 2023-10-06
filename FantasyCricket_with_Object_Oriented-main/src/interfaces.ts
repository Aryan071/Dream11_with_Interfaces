export interface cricketPlayerInterface {
  getPlayingRole(): string;
  getisCaptain(): boolean;
  setisCaptain(): void;
  setisViceCaptain(): void;
  getisViceCaptain(): boolean;
  addRun(shot: number): void;
  getRun(): number;
  setIsBat(): void;
  getIsBat(): boolean;
  addOvers(): void;
  getCompletedOvresCount(): number;
  addBall(): void;
  getBall(): number;
  addWickets(): void;
  getWickets(): number;
}

export interface teamInterface {
  getName(): string;
  // players: cricketPlayer[];
  // ball: number;
  // wickets: number;
  // overs: number;
}

export interface cricketInterface {
  getCurrentBatsman(): cricketPlayerInterface;
  getCurrentBowler(): cricketPlayerInterface;
  // autoPlay():void;
}

export interface matchInterface {
  isTeamNameSame(team1: teamInterface, team2: teamInterface): void;
  flipToss(): void;
  getTeam1(): teamInterface;
  getTeam2(): teamInterface;
}

export interface shotInterface {
  getName(): void;
  getPoint(): void;
  getRun(): number;
}
