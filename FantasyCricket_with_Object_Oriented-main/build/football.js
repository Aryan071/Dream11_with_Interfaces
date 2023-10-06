"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Football = void 0;
class Football {
    attackingTeam;
    defendingTeam;
    constructor(team1, team2) {
        this.isTeamNameSame(team1, team2);
        this.attackingTeam = team1;
        this.defendingTeam = team2;
        console.log("Football match is played between " +
            team1.getName() +
            " and " +
            team2.getName());
    }
    isTeamNameSame(team1, team2) {
        if (team1.getName() == team2.getName())
            throw new Error("Duplicate Team names are not allowed");
    }
    flipToss() {
        let headsOrTails = Math.floor(Math.random() * 2);
        if (headsOrTails == 0) {
            let temp = this.attackingTeam;
            this.attackingTeam = this.defendingTeam;
            this.defendingTeam = temp;
        }
        // console.log(
        //   `${this.attackingTeam.getName()} has won the toss and choose to attack first`
        // );
    }
    getTeam1() {
        return this.attackingTeam;
    }
    getTeam2() {
        return this.defendingTeam;
    }
}
exports.Football = Football;
