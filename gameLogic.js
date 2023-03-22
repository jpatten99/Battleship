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


let direction = 2;
document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    direction++;
  }
};

export const joshua = playerFactory("Joshua");
export const computer = playerFactory();
export const joshuaGameBoard = gameBoardFactory();
// joshua.placeShipRandom(joshuaGameBoard, "carrier", 5);
// joshua.placeShipRandom(joshuaGameBoard, "battleship", 4);
// joshua.placeShipRandom(joshuaGameBoard, "cruiser", 3);
// joshua.placeShipRandom(joshuaGameBoard, "submarine", 3);
// joshua.placeShipRandom(joshuaGameBoard, "destroyer", 2);
export const computerGameBoard = gameBoardFactory();
computer.placeShipRandom(computerGameBoard, "carrier", 5);
computer.placeShipRandom(computerGameBoard, "battleship", 4);
computer.placeShipRandom(computerGameBoard, "cruiser", 3);
computer.placeShipRandom(computerGameBoard, "submarine", 3);
computer.placeShipRandom(computerGameBoard, "destroyer", 2);

renderGameBoards(joshuaGameBoard, computerGameBoard);

let enemyClickEnabled = false;
export function enemyOnClickFunction(i, j) {
  if(enemyClickEnabled) {
    enemyClickEnabled = false;
    joshua.sendAttack(computerGameBoard, i, j);
    renderGameBoards(joshuaGameBoard, computerGameBoard);
    if(computerGameBoard.checkIfAllSunk()){
      alert("Joshua wins");
      enemyClickEnabled = false;
      return;
    }
    delay(100).then(() => {
      computer.sendRandomAttack(joshuaGameBoard);
      renderGameBoards(joshuaGameBoard, computerGameBoard);
      if(joshuaGameBoard.checkIfAllSunk()){
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
        flag = joshuaGameBoard.placeShipHorizontally(i, j, 5, "carrier");
      }
      else{
        flag = joshuaGameBoard.placeShipVertically(i, j, 5, "carrier");
      }
      break;
    case 1:
      if(direction%2===0){
        flag = joshuaGameBoard.placeShipHorizontally(i, j, 4, "battleship");
      }
      else{
        flag = joshuaGameBoard.placeShipVertically(i, j, 4, "battleship");
      }
      break;
    case 2:
      if(direction%2===0){
        flag = joshuaGameBoard.placeShipHorizontally(i, j, 3, "cruiser");
      }
      else{
        flag = joshuaGameBoard.placeShipVertically(i, j, 3, "cruiser");
      }
      break;
    case 3:
      if(direction%2===0){
        flag = joshuaGameBoard.placeShipHorizontally(i, j, 3, "submarine");
      }
      else{
        flag = joshuaGameBoard.placeShipVertically(i, j, 3, "submarine");
      }
      break;
    case 4:
      if(direction%2===0){
        flag = joshuaGameBoard.placeShipHorizontally(i, j, 2, "destroyer");
      }
      else{
        flag = joshuaGameBoard.placeShipVertically(i, j, 2, "destroyer");
      }
      enemyClickEnabled = true;
      document.getElementById("quick-tip").innerText = "";
      break;
    default:
      console.log("hello");
  }

  if(flag === "success"){
    renderGameBoards(joshuaGameBoard, computerGameBoard);
    ownClickEnabled++;
  }
  
}
