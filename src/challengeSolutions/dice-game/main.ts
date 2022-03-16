import { zip } from 'lodash';

interface FrontFace {
  front: number;
  left: number;
  top: number;
}

enum Direction {
  Up,
  Down,
  Left,
  Right,
  Unknown,
}

function parseInput(input: string): Direction[] {
  return [...input].map((char) => {
    switch (char) {
      case 'U':
        return Direction.Up;
      case 'D':
        return Direction.Down;
      case 'L':
        return Direction.Left;
      case 'R':
        return Direction.Right;
      default:
        return Direction.Unknown;
    }
  });
}

function applyTransformation(die: FrontFace, direction: Direction): FrontFace {
  switch (direction) {
    case Direction.Up:
      return {
        front: 7 - die.top,
        left: die.left,
        top: die.front,
      };
    case Direction.Down:
      return {
        front: die.top,
        left: die.left,
        top: 7 - die.front,
      };
    case Direction.Left:
      return {
        front: 7 - die.left,
        left: die.front,
        top: die.top,
      };
    case Direction.Right:
      return {
        front: die.left,
        left: 7 - die.front,
        top: die.top,
      };
    case Direction.Unknown:
      return die;
  }
}

function applyMovesWithHistory(
  startingDie: FrontFace,
  moves: Direction[]
): FrontFace[] {
  let history = [startingDie];

  moves.forEach((direction) => {
    history = [
      ...history,
      applyTransformation(history.at(-1) ?? startingDie, direction),
    ];
  });
  return history;
}

function intoIndexAndDie(history: FrontFace[]) {
  return history.slice(1).map((die, index) => ({ index, front: die.front }));
}

function solution(moveStr: string): string {
  const moves = parseInput(moveStr);

  const historyOne = applyMovesWithHistory(
    { front: 1, left: 2, top: 3 },
    moves
  );
  const historyTwo = applyMovesWithHistory(
    { front: 1, left: 3, top: 2 },
    moves
  );

  const handleOne = intoIndexAndDie(historyOne);
  const handleTwo = intoIndexAndDie(historyTwo);

  return zip(handleOne, handleTwo)
    .filter((zipped) => zipped[0]?.front === zipped[1]?.front ?? false)
    .map((zipped) => zipped[0]?.index ?? 0)
    .reduce((previous, current) => previous + current)
    .toString();
}

export { solution };
