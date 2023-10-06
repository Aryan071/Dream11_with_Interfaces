"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cricketPlayer = void 0;
const player_1 = require("./player");
class cricketPlayer {
    player;
    playingRole;
    run = 0;
    ball = 0;
    isCaptain = false;
    isViceCaptain = false;
    isBat = false;
    completedOvers = 0;
    wickets = 0;
    fantasyPoints = 0;
    constructor(id, name, credit, playingRole) {
        this.player = new player_1.Player(id, name, credit);
        this.playingRole = playingRole;
    }
    // getId(): number {
    //   return this.id;
    // }
    // getName(): string {
    //   return this.name;
    // }
    // getCredit(): number {
    //   return this.credit;
    // }
    addFantasyPoints(fantasyPoints) {
        this.fantasyPoints += fantasyPoints;
    }
    getFantasyPoints() {
        return this.fantasyPoints;
    }
    getPlayingRole() {
        return this.playingRole;
    }
    getisCaptain() {
        return this.isCaptain;
    }
    setisCaptain() {
        this.isCaptain = true;
    }
    setisViceCaptain() {
        this.isViceCaptain = true;
    }
    getisViceCaptain() {
        return this.isViceCaptain;
    }
    addRun(shot) {
        this.run += shot;
    }
    getRun() {
        return this.run;
    }
    setIsBat() {
        this.isBat = true;
    }
    getIsBat() {
        return this.isBat;
    }
    addOvers() {
        this.completedOvers++;
    }
    getCompletedOvresCount() {
        return this.completedOvers;
    }
    addBall() {
        this.ball++;
    }
    getBall() {
        return this.ball;
    }
    addWickets() {
        this.wickets++;
    }
    getWickets() {
        return this.wickets;
    }
}
exports.cricketPlayer = cricketPlayer;
