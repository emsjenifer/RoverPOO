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
  
    public moveForward(): void {
        let newPosition: Position;
      
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
    
    public moveBackward(): void {
        let newPosition: Position;
      
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
  
    public turnLeft(): void {
      this.direction = (this.direction - 1 + 4) % 4;
    }
  
    public turnRight(): void {
      this.direction = (this.direction + 1) % 4;
    }
}
  