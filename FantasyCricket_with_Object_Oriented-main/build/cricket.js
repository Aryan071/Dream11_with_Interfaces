"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cricket = void 0;
class Cricket {
    battingTeam;
    bowlingTeam;
    currentBatsman;
    currentBowler;
    overs = 0;
    constructor(team1, team2) {
        this.isTeamNameSame(team1, team2);
        this.battingTeam = team1;
        this.bowlingTeam = team2;
        console.log("Cricket match is played between " +
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
            let temp = this.battingTeam;
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp;
        }
        // console.log(
        //   `${this.battingTeam.getName()} has won the toss and choose to bat first`
        // );
    }
    // setOvers(overs: number) {
    //   this.overs = overs;
    // }
    //   autoPlay(): void {
    //     for (let i = 1; i <= this.overs * 6; i++) {
    //       this.updateFantasyPointsAndStats();
    //     }
    //   }
    //   updateFantasyPointsAndStats(): void {
    //     if (this.battingTeam.getWickets() == 10)
    //       return;
    //     this.updateOvers();
    //     this.bowlingTeam.addBall(this.currentBatsman);
    //     let playedShot = Shot.shot();
    //     if (playedShot.getName() == "Wicket") {
    //       this.changeBatsman();
    //       this.battingTeam.addWickets(this.currentBowler);
    //       this.updateBowlerFantasyPoints(playedShot, this.currentBowler);
    //       this.updateFantasyPointsOnDuck(this.currentBatsman);
    //     } else if (playedShot.getName() == "DotBall") {
    //       this.updateBowlerFantasyPoints(playedShot, this.currentBowler);
    //     } else {
    //       this.updateBatsmanFantasyPoints(playedShot, this.currentBatsman);
    //     }
    //   }
    //   updateBatsmanFantasyPoints(playedShot: Shot, batsman: cricketPlayer): void {
    //     batsman.addRun(playedShot.getRun());
    //     if (batsman.getisCaptain() === true)
    //       batsman.addFantasyPoints(playedShot.getPoint() * 2);
    //     else if (batsman.getisViceCaptain() === true)
    //       batsman.addFantasyPoints(playedShot.getPoint() * 1.5);
    //     else
    //       batsman.addFantasyPoints(playedShot.getPoint());
    //   }
    //   updateBowlerFantasyPoints(playedShot: Shot, bowler: cricketPlayer): void {
    //     if (bowler.getisCaptain() === true)
    //       bowler.addFantasyPoints(playedShot.getPoint() * 2);
    //     else if (bowler.getisViceCaptain() === true)
    //       bowler.addFantasyPoints(playedShot.getPoint() * 1.5);
    //     else
    //       bowler.addFantasyPoints(playedShot.getPoint());
    //   }
    //   changeBatsman(): void {
    //     this.currentBatsman.setIsBat();
    //     this.currentBatsman = this.battingTeam.getBatsman();
    //   }
    //   setBatsmanAndBowler() {
    //     this.currentBatsman = this.battingTeam.getBatsman();
    //     this.currentBowler = this.bowlingTeam.getBowler(this.overs);
    //   }
    //   updateFantasyPointsOnDuck(player: cricketPlayer): void {
    //     if (player.getRun() == 0)
    //       player.addFantasyPoints(-2);
    //   }
    //   updateOvers(): void {
    //     if (this.bowlingTeam.getBall() % 6 == 0)
    //       if (this.currentBowler.getCompletedOvresCount() == this.overs / 5)
    //         this.changeBowler();
    //       else
    //         this.currentBowler.addOvers();
    //     this.bowlingTeam.setOvers();
    //   }
    //   changeBowler(): void {
    //     this.currentBowler = this.bowlingTeam.getBowler(this.overs);
    //   }
    //   changeInning(): void {
    //     let temp: Team = this.battingTeam;
    //     this.battingTeam = this.bowlingTeam;
    //     this.bowlingTeam = temp;
    //     this.setBatsmanAndBowler();
    //   }
    getTeam1() {
        return this.battingTeam;
    }
    getTeam2() {
        return this.bowlingTeam;
    }
    getCurrentBatsman() {
        return this.currentBatsman;
    }
    getCurrentBowler() {
        return this.currentBowler;
    }
}
exports.Cricket = Cricket;
