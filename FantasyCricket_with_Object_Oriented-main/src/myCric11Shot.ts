import { shotInterface } from "./interfaces";
import shotMapper from "./shotMapper";

export const myCric11Shots = [
  { name: "Single", point: 1, runs: 1 },
  { name: "Double", point: 2, runs: 2 },
  { name: "Triple", point: 3, runs: 3 },
  { name: "Boundary", point: 5, runs: 4 },
  { name: "Six", point: 8, runs: 6 },
  { name: "DotBall", point: 1, runs: 0 },
  { name: "Wicket", point: 10, runs: 0 },
];

export class MyCric11 implements shotInterface {
  private name: string;
  private point: number;
  private run: number;

  constructor(name: string, point: number, run: number) {
    this.name = name;
    this.point = point;
    this.run = run;
  }

  static shot(): void {
    let result = Math.floor(Math.random() * 7);
    shotMapper.toDomain(myCric11Shots[result], "MyCric11");
  }

  getName(): string {
    return this.name;
  }

  getPoint(): number {
    return this.point;
  }

  getRun(): number {
    return this.run;
  }
}