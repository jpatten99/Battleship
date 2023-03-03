import {shipFactory} from "./ship.js";
// each gameBoard should be 7x7
function gameBoardFactory() {
  
  return {
    coordinates:[
                  [null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null]
                ],
    placeShipHorizontally(y, x, length, shipName) {
      // first check if ship will run out of spaces
      if ((length + x) <= 7){
        // Before placing ship, see if any of the spaces needed are taken already
        for(let i = 0; i < length; i++){
          if(this.coordinates[y][x + i] != null){
            return "can't place ship here --- space already taken";
          }
        }
        // When this code is reached, we know the ship won't run over the edge and the spaces on the board aren't already taken
        const tempShip = shipFactory(length, shipName);
        for(let i = 0; i < length; i++){
          this.coordinates[y][x + i] = tempShip;
        }
        return "success";
      }
      // If this is reached, ship couldn't be placed because it "ran over the edge of the board"
      return "can't place ship here --- hit edge";
    },
    placeShipVertically(y, x, length, shipName) {
      // first check if ship will run out of spaces
      if ((length + y) <= 7){
        // Before placing ship, see if any of the spaces needed are taken already
        for(let i = 0; i < length; i++){
          if(this.coordinates[y + i][x] != null){
            return "can't place ship here --- space already taken";
          }
        }
        // When this code is reached, we know the ship won't run over the edge and the spaces on the board aren't already taken
        const tempShip = shipFactory(length, shipName);
        for(let i = 0; i < length; i++){
          this.coordinates[y + i][x] = tempShip;
        }
        return "success";
      }
      // If this is reached, ship couldn't be placed because it "ran over the edge of the board"
      return "can't place ship here --- hit edge";
    },
  };
}

// eslint-disable-next-line import/prefer-default-export
export const testGameBoard = gameBoardFactory();
