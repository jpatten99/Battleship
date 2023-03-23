// eslint-disable-next-line import/no-cycle, import/extensions
import {enemyOnClickFunction, ownOnClickFunction} from "./gameLogic.js";

// eslint-disable-next-line import/prefer-default-export
export const renderGameBoards = (gameboard1, gameboard2) => {
  const leftGameBoard = document.getElementById("leftGameBoardContainer");
  leftGameBoard.innerHTML = "";
  for(let i=0; i<7; i+=1) {
    for(let j=0; j<7; j+=1) {
      const myDiv = document.createElement('div');
      switch(gameboard1.coordinates[i][j]) {
        case null:
          myDiv.style.backgroundColor = "black";
          myDiv.onclick = () => {
            ownOnClickFunction(i, j);
          };
          break;
        case "miss":
          myDiv.style.backgroundColor = "lightblue";
          break;
        case "hitcarrier":
            if(gameboard1.arsenal[0].isSunk()){
              myDiv.style.backgroundColor = "darkgreen";
            }
            else{
              myDiv.style.backgroundColor = "red";
            }
            break;
        case "hitbattleship":
          if(gameboard1.arsenal[1].isSunk()){
            myDiv.style.backgroundColor = "darkgreen";
          }
          else{
            myDiv.style.backgroundColor = "red";
          }
          break;  
        case "hitcruiser":
          if(gameboard1.arsenal[2].isSunk()){
            myDiv.style.backgroundColor = "darkgreen";
          }
          else{
            myDiv.style.backgroundColor = "red";
          }
          break;  
        case "hitsubmarine":
          if(gameboard1.arsenal[3].isSunk()){
            myDiv.style.backgroundColor = "darkgreen";
          }
          else{
            myDiv.style.backgroundColor = "red";
          }
          break;  
        case "hitdestroyer":
          if(gameboard1.arsenal[4].isSunk()){
            myDiv.style.backgroundColor = "darkgreen";
          }
          else{
            myDiv.style.backgroundColor = "red";
          }
          break;    
        default:
          myDiv.style.backgroundColor = "gray";
      }
      leftGameBoard.appendChild(myDiv);
    }
  }
  const rightGameBoard = document.getElementById("rightGameBoardContainer");
  rightGameBoard.innerHTML = "";
  for(let i=0; i<7; i+=1) {
    for(let j=0; j<7; j+=1) {
      const myDiv = document.createElement('div');
      switch(gameboard2.coordinates[i][j]) {
        case null:
          myDiv.style.backgroundColor = "black";
          myDiv.onclick = () => {
            enemyOnClickFunction(i, j);
          };
          break;
        case "miss":
          myDiv.style.backgroundColor = "lightblue";
          break;
        case "hitcarrier":
          if(gameboard2.arsenal[0].isSunk()){
            myDiv.style.backgroundColor = "darkgreen";
          }
          else{
            myDiv.style.backgroundColor = "red";
          }
          break;
        case "hitbattleship":
          if(gameboard2.arsenal[1].isSunk()){
            myDiv.style.backgroundColor = "darkgreen";
          }
          else{
            myDiv.style.backgroundColor = "red";
          }
          break;  
        case "hitcruiser":
          if(gameboard2.arsenal[2].isSunk()){
            myDiv.style.backgroundColor = "darkgreen";
          }
          else{
            myDiv.style.backgroundColor = "red";
          }
          break;  
        case "hitsubmarine":
          if(gameboard2.arsenal[3].isSunk()){
            myDiv.style.backgroundColor = "darkgreen";
          }
          else{
            myDiv.style.backgroundColor = "red";
          }
          break;  
        case "hitdestroyer":
          if(gameboard2.arsenal[4].isSunk()){
            myDiv.style.backgroundColor = "darkgreen";
          }
          else{
            myDiv.style.backgroundColor = "red";
          }
          break;
        default:
          myDiv.style.backgroundColor = "black";
          myDiv.onclick = () => {
            enemyOnClickFunction(i, j);
          };
      }
      rightGameBoard.appendChild(myDiv);
    }
  }
};

