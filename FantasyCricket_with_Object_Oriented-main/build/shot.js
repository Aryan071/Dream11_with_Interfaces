"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shot = void 0;
const shotMapper_1 = __importDefault(require("./shotMapper"));
const shots = [
    { name: "Single", point: 1, runs: 1 },
    { name: "Double", point: 2, runs: 2 },
    { name: "Triple", point: 3, runs: 3 },
    { name: "Boundary", point: 5, runs: 4 },
    { name: "Six", point: 8, runs: 6 },
    { name: "DotBall", point: 1, runs: 0 },
    { name: "Wicket", point: 10, runs: 0 },
];
class Shot {
    name;
    point;
    run;
    constructor(name, point, run) {
        this.name = name;
        this.point = point;
        this.run = run;
    }
    static shot() {
        let result = Math.floor(Math.random() * 7);
        return shotMapper_1.default.toDomain(shots[result]);
    }
    getName() {
        return this.name;
    }
    getPoint() {
        return this.point;
    }
    getRun() {
        return this.run;
    }
}
exports.Shot = Shot;
