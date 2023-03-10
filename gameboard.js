/* eslint-disable no-plusplus */
// eslint-disable-next-line import/extensions
import {shipFactory} from "./ship.js";

function gameBoardFactory() {
  // Based off of mohamed-ibrahim's answer at https://stackoverflow.com/questions/41661287/how-to-check-if-an-array-contains-another-array 
  function isArrayInArray(arr, item){
    const itemAsString = JSON.stringify(item);
    const contains = arr.some((ele) =>JSON.stringify(ele) === itemAsString);
    return contains;
  };
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
    attemptedCoordinates: [],
    arsenal: [],
    placeShipHorizontally(y, x, length, shipName) {
      // Make sure coordinates are on board
      if(y < 0 || y > 6 || x < 0 || x > 6){
        return "ERROR-Invalid coordinate(s)";
      }
      // Make sure length is valid
      if(length < 1 || length > 5){
        return "ERROR-Invalid length";
      }
      // Check if ship will run out of spaces
      if ((length + x) <= 7){
        // Before placing ship, see if any of the spaces needed are taken already
        for(let i = 0; i < length; i++){
          if(this.coordinates[y][x + i] != null){
            return "ERROR-space already taken";
          }
        }
        // When this code is reached, we know the ship won't run over the edge and the spaces on the board aren't already taken
        const tempShip = shipFactory(length, shipName);
        for(let i = 0; i < length; i++){
          this.coordinates[y][x + i] = tempShip;
        }
        this.arsenal.push(tempShip);
        return "success";
      }
      // If this is reached, ship couldn't be placed because it "ran over the edge of the board"
      return "ERROR-hit edge";
    },
    placeShipVertically(y, x, length, shipName) {
      // Make sure coordinates are on board
      if(y < 0 || y > 6 || x < 0 || x > 6){
        return "ERROR-Invalid coordinate(s)";
      }
      // Make sure length is valid
      if(length < 1 || length > 5){
        return "ERROR-Invalid length";
      }
      // Check if ship will run out of spaces
      if ((length + y) <= 7){
        // Before placing ship, see if any of the spaces needed are taken already
        for(let i = 0; i < length; i++){
          if(this.coordinates[y + i][x] != null){
            return "ERROR-space already taken";
          }
        }
        // When this code is reached, we know the ship won't run over the edge and the spaces on the board aren't already taken
        const tempShip = shipFactory(length, shipName);
        for(let i = 0; i < length; i++){
          this.coordinates[y + i][x] = tempShip;
        }
        this.arsenal.push(tempShip);
        return "success";
      }
      // If this is reached, ship couldn't be placed because it "ran over the edge of the board"
      return "ERROR-hit edge";
    },
    receiveAttack(y, x) {
      if(y > 6 || y < 0 || x > 6 || x < 0){
        return "error-invalid coordinates";
      }
      const tempCoordinatePair = [y, x];
      // Check if attemptedCoordinates already contains tempCoordinatePair, if so, just return error.
      if(isArrayInArray(this.attemptedCoordinates, tempCoordinatePair)) {
        return "error-duplicate";
      }
      // Push coordinate pair if not found
      this.attemptedCoordinates.push(tempCoordinatePair);
      // if a coordinate is null that signals a miss
      if(this.coordinates[y][x] === null){
        this.coordinates[y][x] = "miss";
        return "miss";
      }
      // has to be a hit
      this.coordinates[y][x].hit();
      this.coordinates[y][x] = "hit";
      return "hit";
    },
    checkIfAllSunk() {
      let hitCounter = 0;
      for(let i = 0; i < 5; i++) {
        hitCounter += this.arsenal[i].timesHit;
      }
      return hitCounter === 17;
    },
  };
}

// eslint-disable-next-line import/prefer-default-export
export const testGameBoard = gameBoardFactory();