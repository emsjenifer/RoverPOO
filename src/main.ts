
  const plateau = new Plateau(5, 5);
  const initialPosition = new Position(1, 2);
  const initialDirection = Direction.North;
  const rover = new Rover(initialPosition, initialDirection, plateau);

  console.log('Posição inicial:', rover.getPosition());
  console.log('Direção inicial:', rover.getDirection());

  rover.moveForward();
  console.log('Após mover para frente:', rover.getPosition());

  rover.turnRight();
  console.log('Após virar à direita:', rover.getDirection());

  rover.moveForward();
  console.log('Após mover para frente:', rover.getPosition());