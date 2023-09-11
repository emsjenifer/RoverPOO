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
  moveLeftOrRight(move) {
    if (move === "right") {
      this.direction = (this.direction + 1) % 4;
    } else if (move === "left") {
      this.direction = (this.direction - 1 + 4) % 4;
    }
  }
  moveForwardOrBackward(move) {
    let stepModifier = move === "forward" ? 1 : move === "backward" ? -1 : 0;
    if (stepModifier !== 0) {
      let newPosition;
      switch (this.direction) {
        case Direction.North:
          newPosition = new Position(
            this.position.x,
            this.position.y + stepModifier
          );
          break;
        case Direction.East:
          newPosition = new Position(
            this.position.x + stepModifier,
            this.position.y
          );
          break;
        case Direction.South:
          newPosition = new Position(
            this.position.x,
            this.position.y - stepModifier
          );
          break;
        case Direction.West:
          newPosition = new Position(
            this.position.x - stepModifier,
            this.position.y
          );
          break;
        default:
          newPosition = this.position;
      }
      if (this.plateau.isValidPosition(newPosition)) {
        this.position = newPosition;
      }
    }
  }
}
