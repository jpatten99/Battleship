// eslint-disable-next-line import/no-cycle, import/extensions
import {enemyOnClickFunction, ownOnClickFunction} from "./gameLogic.js";

// eslint-disable-next-line import/prefer-default-export
export const renderGameBoards = (inputArray1, inputArray2) => {
  const leftGameBoard = document.getElementById("leftGameBoardContainer");
  leftGameBoard.innerHTML = "";
  for(let i=0; i<7; i+=1) {
    for(let j=0; j<7; j+=1) {
      const myDiv = document.createElement('div');
      switch(inputArray1[i][j]) {
        case null:
          myDiv.style.backgroundColor = "black";
          myDiv.onclick = () => {
            ownOnClickFunction(i, j);
          };
          break;
        case "miss":
          myDiv.style.backgroundColor = "blue";
          myDiv.innerText = "miss";
          break;
          case "hit":
            myDiv.style.backgroundColor = "red";
            myDiv.innerText = "hit";
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
      switch(inputArray2[i][j]) {
        case null:
          myDiv.style.backgroundColor = "black";
          myDiv.onclick = () => {
            enemyOnClickFunction(i, j);
          };
          break;
        case "miss":
          myDiv.style.backgroundColor = "blue";
          myDiv.innerText = "miss";
          break;
          case "hit":
            myDiv.style.backgroundColor = "gray";
            myDiv.innerText = "hit";
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

