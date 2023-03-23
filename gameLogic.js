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

// Make space bar switch direction of ship placement
let direction = 2;
document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    direction++;
  }
};

export const player1 = playerFactory("player1");
export const computer = playerFactory();
export const player1GameBoard = gameBoardFactory();
export const computerGameBoard = gameBoardFactory();
computer.placeShipRandom(computerGameBoard, "carrier", 5);
computer.placeShipRandom(computerGameBoard, "battleship", 4);
computer.placeShipRandom(computerGameBoard, "cruiser", 3);
computer.placeShipRandom(computerGameBoard, "submarine", 3);
computer.placeShipRandom(computerGameBoard, "destroyer", 2);

renderGameBoards(player1GameBoard, computerGameBoard);

let enemyClickEnabled = false;
export function enemyOnClickFunction(i, j) {
  if(enemyClickEnabled) {
    enemyClickEnabled = false;
    player1.sendAttack(computerGameBoard, i, j);
    renderGameBoards(player1GameBoard, computerGameBoard);
    if(computerGameBoard.checkIfAllSunk()){
      alert("player1 wins");
      enemyClickEnabled = false;
      return;
    }
    delay(1000).then(() => {
      computer.sendRandomAttack(player1GameBoard);
      renderGameBoards(player1GameBoard, computerGameBoard);
      if(player1GameBoard.checkIfAllSunk()){
        alert("Computer wins");
        enemyClickEnabled = false;
        return;
      }
      enemyClickEnabled = true;   
    });
    
  }
}

let ownClickEnabled = 0;
export function ownOnClickFunction(i, j) {
  let flag = false;
  switch(ownClickEnabled) {
    case 0:
      if(direction%2===0){
        flag = player1GameBoard.placeShipHorizontally(i, j, 5, "carrier");
      }
      else{
        flag = player1GameBoard.placeShipVertically(i, j, 5, "carrier");
      }
      break;
    case 1:
      if(direction%2===0){
        flag = player1GameBoard.placeShipHorizontally(i, j, 4, "battleship");
      }
      else{
        flag = player1GameBoard.placeShipVertically(i, j, 4, "battleship");
      }
      break;
    case 2:
      if(direction%2===0){
        flag = player1GameBoard.placeShipHorizontally(i, j, 3, "cruiser");
      }
      else{
        flag = player1GameBoard.placeShipVertically(i, j, 3, "cruiser");
      }
      break;
    case 3:
      if(direction%2===0){
        flag = player1GameBoard.placeShipHorizontally(i, j, 3, "submarine");
      }
      else{
        flag = player1GameBoard.placeShipVertically(i, j, 3, "submarine");
      }
      break;
    case 4:
      if(direction%2===0){
        flag = player1GameBoard.placeShipHorizontally(i, j, 2, "destroyer");
      }
      else{
        flag = player1GameBoard.placeShipVertically(i, j, 2, "destroyer");
      }
      enemyClickEnabled = true;
      document.getElementById("quick-tip").innerText = "";
      break;
    default:
      console.log("...");
  }
  if(flag === "success"){
    renderGameBoards(player1GameBoard, computerGameBoard);
    ownClickEnabled++;
  }
}
