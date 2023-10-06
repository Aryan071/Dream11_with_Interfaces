"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    name;
    players = [];
    ball = 0;
    wickets = 0;
    overs = 0;
    constructor(name) {
        this.validateName(name);
        this.name = name;
    }
    validateName(name) {
        if (name === "") {
            throw new Error("Name of the team should not be empty");
        }
    }
    // addPlayer(player: cricketPlayer[]): void {
    //   let totalCredit = 0;
    //   player.forEach((player) => {
    //     if (
    //       this.validatePlayer(player, totalCredit) &&
    //       this.validatePlayerRole(player)
    //     ) {
    //       this.players.push(player);
    //       totalCredit += player.getCredit();
    //     }
    //   });
    //   this.validateTotalPlayerCount();
    // }
    // // validatePlayer(player: cricketPlayer, totalCredit: number): boolean {
    // //   return player.getCredit() + totalCredit <= 100 && this.players.length < 11;
    // // }
    // removePlayer(id: number): void {
    //   // let playerToRemove = this.players.find((player) => player.getId() === id);
    //   if (playerToRemove) {
    //     this.players.splice(this.players.indexOf(playerToRemove), 1);
    //   }
    // }
    // countByRole(role: string): number {
    //   return this.players.filter((player) => player.getPlayingRole() === role)
    //     .length;
    // }
    // validatePlayerRole(player: cricketPlayer): boolean {
    //   if (player.getPlayingRole() === "Batsman") {
    //     return this.countByRole("Batsman") < 5;
    //   } else if (player.getPlayingRole() === "Bowler") {
    //     return this.countByRole("Bowler") < 5;
    //   } else if (player.getPlayingRole() === "Wicketkeeper") {
    //     return this.countByRole("Wicketkeeper") < 1;
    //   }
    //   return false;
    // }
    // validateTotalPlayerCount(): void {
    //   if (this.players.length !== 11) {
    //     throw new Error(`Please add 11 players to team ${this.name}`);
    //   }
    // }
    // setCaptain(playerForCaptain: cricketPlayer): void {
    //   if (playerForCaptain.getisViceCaptain() == true) {
    //     throw new Error(
    //       "Your Captain is same as ViceCaptain for team " + this.name
    //     );
    //   }
    //   this.players.map((player) => {
    //     if (playerForCaptain === player) {
    //       player.setisCaptain();
    //     }
    //   });
    // }
    // setViceCaptain(playerForViceCaptain: cricketPlayer): void {
    //   if (playerForViceCaptain.getisCaptain() == true) {
    //     throw new Error(
    //       "Your ViceCaptain is same as Captain for team " + this.name
    //     );
    //   }
    //   this.players.map((player) => {
    //     if (playerForViceCaptain === player) {
    //       player.setisViceCaptain();
    //     }
    //   });
    // }
    // getBatsman(): cricketPlayer {
    //   return this.players.filter((player) => {
    //     if (player.getIsBat() == false) {
    //       return player;
    //     }
    //   })[0];
    // }
    // getBowler(overs: number): cricketPlayer {
    //   return this.players.filter((player) => {
    //     if (
    //       player.getPlayingRole() == "Bowler" &&
    //       player.getCompletedOvresCount() == 0
    //     ) {
    //       return player;
    //     }
    //   })[0];
    // }
    // addWickets(player: cricketPlayer): void {
    //   player.addWickets();
    //   this.wickets++;
    // }
    // getRuns(): number {
    //   return this.players.reduce((run: number, player: cricketPlayer) => {
    //     return (run += player.getRun());
    //   }, 0);
    // }
    // getFantasyPoints(): number {
    //   return this.players.reduce((run: number, player: cricketPlayer) => {
    //     return (run += player.getFantasyPoints());
    //   }, 0);
    // }
    // getCaptain(): cricketPlayer {
    //   return this.players.filter((player) => {
    //     if (player.getisCaptain() == true) {
    //       return player;
    //     }
    //   })[0];
    // }
    // getViceCaptain(): cricketPlayer {
    //   return this.players.filter((player) => {
    //     if (player.getisViceCaptain() == true) {
    //       return player;
    //     }
    //   })[0];
    // }
    getName() {
        return this.name;
    }
}
exports.Team = Team;
