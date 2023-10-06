"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCric11 = exports.myCric11Shots = exports.Dream11 = exports.dream11Shots = void 0;
const shotMapper_1 = __importDefault(require("./shotMapper"));
exports.dream11Shots = [
    { name: "Single", point: 1, run: 1 },
    { name: "Double", point: 2, run: 2 },
    { name: "Triple", point: 3, run: 3 },
    { name: "Boundary", point: 5, run: 4 },
    { name: "Six", point: 8, run: 6 },
    { name: "DotBall", point: 1, run: 0 },
    { name: "Wicket", point: 10, run: 0 },
];
class Dream11 {
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
        return shotMapper_1.default.toDomain(exports.dream11Shots[result], Dream11);
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
exports.Dream11 = Dream11;
exports.myCric11Shots = [
    { name: "Single", point: 1, run: 1 },
    { name: "Double", point: 2, run: 2 },
    { name: "Triple", point: 3, run: 3 },
    { name: "Boundary", point: 5, run: 4 },
    { name: "Six", point: 8, run: 6 },
    { name: "DotBall", point: 1, run: 0 },
    { name: "Wicket", point: 10, run: 0 },
];
class MyCric11 {
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
        return shotMapper_1.default.toDomain(exports.myCric11Shots[result], MyCric11);
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
exports.MyCric11 = MyCric11;
class ShotMapper {
    static toDomain(shot, shotType) {
        let playerShot = new shotType(shot.name, shot.point, shot.run);
        return playerShot;
    }
}
exports.default = ShotMapper;
