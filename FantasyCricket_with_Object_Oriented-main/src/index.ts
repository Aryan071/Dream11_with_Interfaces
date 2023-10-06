import { teamInterface } from "./interfaces";
import { Team } from "./team";
import { matchInterface } from "./interfaces";
import { Cricket } from "./cricket";
import { Football } from "./football";
import { Dream11 } from "./dream11Shot";
import { MyCric11 } from "./myCric11Shot";
import { matchFactory } from "./matchFactory";
const prompt = require("prompt-sync")();




const gameChoice = parseInt(
  prompt("What do you want to play? 1.Cricket or 2.Football ")
);
const platformChoice = parseInt(
  prompt("Choose platform to play: 1.MyCric11 or 2.Dream11 ")
);

const combinedChoice = gameChoice * 10 + platformChoice;

let teamName1:string = prompt("Enter the name of the first team: ");
let teamName2:string = prompt("Enter the name of the second team: ");
let team1:teamInterface = new Team(teamName1);
let team2:teamInterface = new Team(teamName2);

let match1 = new matchFactory();
match1.createMatch(combinedChoice,team1,team2);

// match1.flipToss();
// console.log(`${match1.getTeam1().getName()} has won the toss`);
