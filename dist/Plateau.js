"use strict";
export class Plateau {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  isValidPosition(position) {
    return (
      position.x >= 0 &&
      position.x <= this.width &&
      position.y >= 0 &&
      position.y <= this.height
    );
  }
}
