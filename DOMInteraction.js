import {joshua} from "./gameLogic.js";
import {computerGameBoard, joshuaGameBoard, clickFunction} from "./gameLogic.js";

// eslint-disable-next-line import/prefer-default-export
export const renderGameBoards = (inputArray1, inputArray2) => {
  const myGameBoard = document.getElementById("leftGameBoardContainer");
  myGameBoard.innerHTML = "";
  for(let i=0; i<7; i+=1) {
    for(let j=0; j<7; j+=1) {
      const myDiv = document.createElement('div');
      switch(inputArray1[i][j]) {
        case null:
          myDiv.style.backgroundColor = "gray";
          break;
        case "miss":
          myDiv.style.backgroundColor = "red";
          myDiv.innerText = "miss";
          break;
          case "hit":
            myDiv.style.backgroundColor = "green";
            myDiv.innerText = "hit";
            break;  
        default:
          myDiv.style.backgroundColor = "black";
      }
      // myDiv.classList.add(i);
      // myDiv.classList.add(j);
      
      myGameBoard.appendChild(myDiv);
    }
  }
  const computerGameBoard2 = document.getElementById("rightGameBoardContainer");
  computerGameBoard2.innerHTML = "";
  for(let i=0; i<7; i+=1) {
    for(let j=0; j<7; j+=1) {
      const myDiv = document.createElement('div');
      switch(inputArray2[i][j]) {
        case null:
          myDiv.style.backgroundColor = "gray";
          myDiv.onclick = () => {
            joshua.sendAttack(computerGameBoard, i, j);
            clickFunction();
          };
          break;
        case "miss":
          myDiv.style.backgroundColor = "red";
          myDiv.innerText = "miss";
          break;
          case "hit":
            myDiv.style.backgroundColor = "green";
            myDiv.innerText = "hit";
            break;  
        default:
          myDiv.style.backgroundColor = "gray";
          myDiv.onclick = () => {
            joshua.sendAttack(computerGameBoard, i, j);
            clickFunction();
          };
      }
      // myDiv.classList.add(i);
      // myDiv.classList.add(j);
      computerGameBoard2.appendChild(myDiv);
    }
  }
};

const testBTN = document.getElementById('testBTN');
testBTN.innerText = "TEST";
testBTN.addEventListener('click', () =>{
  renderGameBoards(joshuaGameBoard.coordinates, computerGameBoard.coordinates);
});

