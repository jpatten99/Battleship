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
      console.log(`x: ${x} y: ${y}`);
      return y;
    },
  };
}

const josh = playerFactory("josh");