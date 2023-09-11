class Rover {
  private position: Position;
  private direction: Direction;
  private plateau: Plateau;

  constructor(initialPosition: Position, initialDirection: Direction, plateau: Plateau) {
    this.position = initialPosition;
    this.direction = initialDirection;
    this.plateau = plateau;
  }

  public getPosition(): Position {
    return this.position;
  }
  
  public getDirection(): Direction {
    return this.direction;
  }

  public moveLeftOrRight(move: "left" | "right"): void {
    if (move === "right") {
        this.direction = (this.direction + 1) % 4;
    } else if (move === "left") {
        this.direction = (this.direction - 1 + 4) % 4;
    }
  }

  public moveForwardOrBackward(move: "forward" | "backward"): void {
    let stepModifier = move === "forward" ? 1 : move === "backward" ? -1 : 0;

    if (stepModifier !== 0) {
      let newPosition: Position;

      switch (this.direction) {
          case Direction.North:
              newPosition = new Position(this.position.x, this.position.y + stepModifier);
              break;
          case Direction.East:
              newPosition = new Position(this.position.x + stepModifier, this.position.y);
              break;
          case Direction.South:
              newPosition = new Position(this.position.x, this.position.y - stepModifier);
              break;
          case Direction.West:
              newPosition = new Position(this.position.x - stepModifier, this.position.y);
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
  