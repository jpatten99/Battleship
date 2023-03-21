/* eslint-disable import/extensions */
/* eslint-disable no-alert */
import {playerFactory} from "./player.js";
import {gameBoardFactory} from "./gameboard.js";
import { renderGameBoards} from "./DOMInteraction.js";

let turnCounter = 2;
export const joshua = playerFactory("Joshua");
const computer = playerFactory();
export const joshuaGameBoard = gameBoardFactory();
joshuaGameBoard.placeShipHorizontally(0, 0, 5, "carrier");
joshuaGameBoard.placeShipHorizontally(2, 0, 4, "battleship");
joshuaGameBoard.placeShipHorizontally(3, 0, 3, "cruiser");
joshuaGameBoard.placeShipHorizontally(4, 0, 3, "submarine");
joshuaGameBoard.placeShipHorizontally(5, 4, 2, "carrier");
export const computerGameBoard = gameBoardFactory();
computerGameBoard.placeShipHorizontally(0, 0, 5, "carrier");
computerGameBoard.placeShipHorizontally(2, 0, 4, "battleship");
computerGameBoard.placeShipHorizontally(3, 0, 3, "cruiser");
computerGameBoard.placeShipHorizontally(4, 0, 3, "submarine");
computerGameBoard.placeShipHorizontally(5, 4, 2, "carrier");


renderGameBoards(joshuaGameBoard.coordinates, computerGameBoard.coordinates);


export const clickFunction = () => {
  renderGameBoards(joshuaGameBoard.coordinates, computerGameBoard.coordinates);
  if(computerGameBoard.checkIfAllSunk()) {
    alert("Joshua wins!");
  }
  setTimeout(() => {
    console.log("pause");
  }, 2000);
  computer.sendRandomAttack(joshuaGameBoard);
  renderGameBoards(joshuaGameBoard.coordinates, computerGameBoard.coordinates);
  if(joshuaGameBoard.checkIfAllSunk()) {
    alert("Computer wins!");
  }
};











// pre-game is complete, begin game logic
async function gameLoop() {
  renderGameBoards(joshuaGameBoard.coordinates, computerGameBoard.coordinates);
  while(!joshuaGameBoard.checkIfAllSunk() && !computerGameBoard.checkIfAllSunk()){
    if(turnCounter % 2 === 0){
    }
    else{
      computer.sendRandomAttack(joshuaGameBoard);
    }
    renderGameBoards(joshuaGameBoard.coordinates, computerGameBoard.coordinates);
    turnCounter += 1;
  }
  
  if(joshuaGameBoard.checkIfAllSunk()) {
    alert("Computer wins");
  }
  else {alert("Joshua wins");}
}
