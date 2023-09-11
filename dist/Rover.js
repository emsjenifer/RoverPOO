"use strict";
import { Position } from "./Position.js";
import { Direction } from "./Direction.js";
export class Rover {
  constructor(initialPosition, initialDirection, plateau) {
    this.position = initialPosition;
    this.direction = initialDirection;
    this.plateau = plateau;
  }
  getPosition() {
    return this.position;
  }
  getDirection() {
    return this.direction;
  }
  moveForward() {
    let newPosition;
    switch (this.direction) {
      case Direction.North:
        newPosition = new Position(this.position.x, this.position.y + 1);
        break;
      case Direction.East:
        newPosition = new Position(this.position.x + 1, this.position.y);
        break;
      case Direction.South:
        newPosition = new Position(this.position.x, this.position.y - 1);
        break;
      case Direction.West:
        newPosition = new Position(this.position.x - 1, this.position.y);
        break;
      default:
        newPosition = this.position;
    }
    if (this.plateau.isValidPosition(newPosition)) {
      this.position = newPosition;
    }
  }
  moveBackward() {
    let newPosition;
    switch (this.direction) {
      case Direction.North:
        newPosition = new Position(this.position.x, this.position.y - 1);
        break;
      case Direction.East:
        newPosition = new Position(this.position.x - 1, this.position.y);
        break;
      case Direction.South:
        newPosition = new Position(this.position.x, this.position.y + 1);
        break;
      case Direction.West:
        newPosition = new Position(this.position.x + 1, this.position.y);
        break;
      default:
        newPosition = this.position;
    }
    if (this.plateau.isValidPosition(newPosition)) {
      this.position = newPosition;
    }
  }
  turnLeft() {
    this.direction = (this.direction - 1 + 4) % 4;
  }
  turnRight() {
    this.direction = (this.direction + 1) % 4;
  }
}
