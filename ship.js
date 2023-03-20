// eslint-disable-next-line import/prefer-default-export
export function shipFactory(shipLength, shipName) {
  return {
    shipLength,
    shipName,
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
