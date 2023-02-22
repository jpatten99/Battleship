class Ship {

  constructor(shipLength) {
    this.shipLength = shipLength;
    this.timesHit = 0;
  }

  sayHi() {
    console.log(this);
  }

  hit() {
    this.timesHit += 1;
  }

  isSunk() {
    return (this.shipLength === this.timesHit);
  }

}

// Usage:
export const ship = new Ship(3);
export const ship2 = new Ship(6);
ship.hit();
ship.hit();
ship.hit();