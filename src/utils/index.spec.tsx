import { getKingPossibleMoves, MovesList } from './';

describe('Possible moves', () => {
  it('King', () => {
    let movesList: MovesList;

    // Top left edge

    movesList = getKingPossibleMoves([0, 0]);

    expect(movesList).toEqual([
      [0, 1],
      [1, 0],
      [1, 1],
    ]);

    // Top right edge

    movesList = getKingPossibleMoves([0, 7]);

    expect(movesList).toEqual([
      [0, 6],
      [1, 6],
      [1, 7],
    ]);

    // Bottom left edge

    movesList = getKingPossibleMoves([7, 0]);

    expect(movesList).toEqual([
      [6, 0],
      [6, 1],
      [7, 1],
    ]);

    // Bottom right edge

    movesList = getKingPossibleMoves([7, 7]);

    expect(movesList).toEqual([
      [6, 6],
      [6, 7],
      [7, 6],
    ]);

    // In the middle

    movesList = getKingPossibleMoves([1, 1]);

    expect(movesList).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);
  });
});
