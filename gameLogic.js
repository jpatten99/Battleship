/* eslint-disable import/extensions */
/* eslint-disable no-alert */
import {playerFactory} from "./player.js";
import {gameBoardFactory} from "./gameboard.js";

let turnCounter = 2;
const joshua = playerFactory("Joshua");
const computer = playerFactory();
const joshuaGameBoard = gameBoardFactory();
joshuaGameBoard.placeShipHorizontally(0, 0, 5, "carrier");
joshuaGameBoard.placeShipHorizontally(2, 0, 4, "battleship");
joshuaGameBoard.placeShipHorizontally(3, 0, 3, "cruiser");
joshuaGameBoard.placeShipHorizontally(4, 0, 3, "submarine");
joshuaGameBoard.placeShipHorizontally(5, 4, 2, "carrier");
const computerGameBoard = gameBoardFactory();
computerGameBoard.placeShipHorizontally(0, 0, 5, "carrier");
computerGameBoard.placeShipHorizontally(2, 0, 4, "battleship");
computerGameBoard.placeShipHorizontally(3, 0, 3, "cruiser");
computerGameBoard.placeShipHorizontally(4, 0, 3, "submarine");
computerGameBoard.placeShipHorizontally(5, 4, 2, "carrier");

console.log(joshua);
console.log("\n");
console.log(computer);
console.log("\n");
console.log(joshuaGameBoard);
console.log("\n");
console.log(computerGameBoard);

// pre-game is complete, begin game logic
while(!joshuaGameBoard.checkIfAllSunk() && !computerGameBoard.checkIfAllSunk()){
  if(turnCounter % 2 === 0){
    console.log("I attack");
  }
  else{
    computer.sendRandomAttack(joshuaGameBoard);
  }
  turnCounter += 1;
}

if(joshuaGameBoard.checkIfAllSunk()) {
  alert("Joshua wins");
}
else {alert("Computer wins");}