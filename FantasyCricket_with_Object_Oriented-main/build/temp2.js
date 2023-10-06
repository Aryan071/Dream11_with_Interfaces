"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dream11 = exports.MyCric11 = void 0;
class MyCric11 {
    name;
    point;
    run;
    constructor(name, point, run) {
        this.name = name;
        this.point = point;
        this.run = run;
    }
    shot() {
        let result = Math.floor(Math.random() * 7);
        return ShotMapper.toDomain(myCric11Shots[result], "MyCric11");
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
class Dream11 {
    name;
    point;
    run;
    constructor(name, point, run) {
        this.name = name;
        this.point = point;
        this.run = run;
    }
    shot() {
        let result = Math.floor(Math.random() * 7);
        return ShotMapper.toDomain(dream11Shots[result], "Dream11");
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
// The ShotMapper class remains the same.
