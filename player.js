import {gameBoardFactory} from "./gameboard.js";

// eslint-disable-next-line import/prefer-default-export
export function playerFactory(playerName = "computer") {
  // max > output >= min
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return {
    playerName,
    sendAttack(gameBoard, y, x) {
      return(gameBoard.receiveAttack(y, x));
    },
    sendRandomAttack(gameBoard) {
      let validPair = "error-duplicate";
      let y;
      let x;
      while (validPair === "error-duplicate"){
        y = getRandomArbitrary(0, 7);
        x = getRandomArbitrary(0, 7);
        validPair = gameBoard.receiveAttack(y, x);
      }
    },
    placeShipRandom(gameboard, shipName, shipLength) {
      const direction = getRandomArbitrary(1, 3);
      if(direction===1){
        let y = getRandomArbitrary(0, 7);
        let x = getRandomArbitrary(0, 7);
        let flag = gameboard.placeShipHorizontally(y, x, shipLength, shipName);
        while(flag !== "success") {
          y = getRandomArbitrary(0, 7);
          x = getRandomArbitrary(0, 7);
          flag = gameboard.placeShipHorizontally(y, x, shipLength, shipName);
        }
        return "success";
      }
      
      let y = getRandomArbitrary(0, 7);
      let x = getRandomArbitrary(0, 7);
      let flag = gameboard.placeShipVertically(y, x, shipLength, shipName);
      while(flag !== "success") {
        y = getRandomArbitrary(0, 7);
        x = getRandomArbitrary(0, 7);
        flag = gameboard.placeShipVertically(y, x, shipLength, shipName);
      }
      return "success";
      
    }
  };
}