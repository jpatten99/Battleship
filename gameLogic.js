/* eslint-disable import/extensions */
/* eslint-disable no-alert */
import {playerFactory} from "./player.js";
import {gameBoardFactory} from "./gameboard.js";
// eslint-disable-next-line import/no-cycle
import {renderGameBoards} from "./DOMInteraction.js";

function delay(time) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise(resolve => setTimeout(resolve, time));
}

export const joshua = playerFactory("Joshua");
export const computer = playerFactory();
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

let clickEnabled = true;

export function onClickFunction(i, j) {
  if(clickEnabled) {
    clickEnabled = false;
    joshua.sendAttack(computerGameBoard, i, j);
    renderGameBoards(joshuaGameBoard.coordinates, computerGameBoard.coordinates);
    if(computerGameBoard.checkIfAllSunk()){
      alert("Joshua wins");
      clickEnabled = false;
      return;
    }
    delay(100).then(() => {
      computer.sendRandomAttack(joshuaGameBoard);
      renderGameBoards(joshuaGameBoard.coordinates, computerGameBoard.coordinates);
      if(joshuaGameBoard.checkIfAllSunk()){
        alert("Computer wins");
        clickEnabled = false;
        return;
      }
      clickEnabled = true;   
    });
    
  }
}
