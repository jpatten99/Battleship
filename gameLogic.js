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
joshua.placeShipRandom(joshuaGameBoard, "carrier", 5);
joshua.placeShipRandom(joshuaGameBoard, "battleship", 4);
joshua.placeShipRandom(joshuaGameBoard, "cruiser", 3);
joshua.placeShipRandom(joshuaGameBoard, "submarine", 3);
joshua.placeShipRandom(joshuaGameBoard, "destroyer", 2);
export const computerGameBoard = gameBoardFactory();
computer.placeShipRandom(computerGameBoard, "carrier", 5);
computer.placeShipRandom(computerGameBoard, "battleship", 4);
computer.placeShipRandom(computerGameBoard, "cruiser", 3);
computer.placeShipRandom(computerGameBoard, "submarine", 3);
computer.placeShipRandom(computerGameBoard, "destroyer", 2);

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
