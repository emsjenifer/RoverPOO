const plateau = new Plateau(5, 5);
const initialPosition = new Position(1, 2);
const initialDirection = Direction.North;
const rover = new Rover(initialPosition, initialDirection, plateau);

console.log('Posição inicial:', rover.getPosition());
rover.moveLeftOrRight("right");
rover.moveForwardOrBackward("forward");
console.log(rover.getPosition());
console.log(rover.getDirection());
rover.moveLeftOrRight("left");
rover.moveForwardOrBackward("backward");
console.log(rover.getPosition());
console.log(rover.getDirection());