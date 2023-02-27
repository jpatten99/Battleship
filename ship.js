// export class Ship {

//   constructor(shipLength) {
//     this.shipLength = shipLength;
//     this.timesHit = 0;
//   }

//   sayHi() {
//     console.log(this);
//   }

//   hit() {
//     this.timesHit += 1;
//   }

//   isSunk() {
//     return (this.shipLength === this.timesHit);
//   }

// }

export function shipFactory(shipLength) {
  return {
    shipLength,
    timesHit: 0,
    hit() {
      // eslint-disable-next-line no-plusplus
      this.timesHit++;
    },
    isSunk() {
      return (this.shipLength <= this.timesHit);
    },
  };
}

// Usage:
export const testShip = shipFactory(3);