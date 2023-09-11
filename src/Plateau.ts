class Plateau {
  constructor(public width: number, public height: number) {}

  public isValidPosition(position: Position): boolean {
      return (
        position.x >= 0 &&
        position.x <= this.width &&
        position.y >= 0 &&
        position.y <= this.height
      );
  }
}