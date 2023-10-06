"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const team_1 = require("./team");
const cricket_1 = require("./cricket");
const football_1 = require("./football");
const prompt = require("prompt-sync")();
let match1;
let team1;
let team2;
let teamName1;
let teamName2;
const gameChoice = parseInt(prompt("What do you want to play? 1.Cricket or 2.Football "));
const platformChoice = parseInt(prompt("Choose platform to play: 1.MyCric11 or 2.Dream11 "));
teamName1 = prompt("Enter the name of the first team: ");
teamName2 = prompt("Enter the name of the second team: ");
team1 = new team_1.Team(teamName1);
team2 = new team_1.Team(teamName2);
switch (gameChoice) {
    case 1:
        match1 = new cricket_1.Cricket(team1, team2);
        break;
    case 2:
        match1 = new football_1.Football(team1, team2);
        break;
    default:
        console.log("Invalid answer!");
}
switch (platformChoice) {
    case 1:
        match1 = new cricket_1.Cricket(team1, team2);
        break;
    case 2:
        match1 = new football_1.Football(team1, team2);
        break;
    default:
        console.log("Invalid answer!");
}
match1.flipToss();
console.log(`${match1.getTeam1().getName()} has won the toss`);
