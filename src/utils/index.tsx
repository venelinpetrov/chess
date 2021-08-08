import { clone } from 'ramda';
import { PieceProps } from '../components/Piece';
import { BoardArray } from '../components/Board';

export type MovesList = Array<[number, number]>;

/**
 * Calculate king possible moves.
 * Note that thes are NOT legal moves, just possible moves on an empty board
 * @param coords Current king coordinates
 * @returns MovesList
 */
export const getKingPossibleMoves = (
  coords: PieceProps['coords']
): MovesList => {
  const possibleMoves: MovesList = [];

  // Math.min / Math.max to account for the edge of the board
  for (
    let i = Math.max(coords[0] - 1, 0);
    i < Math.min(coords[0] + 2, 8);
    i++
  ) {
    for (
      let j = Math.max(coords[1] - 1, 0);
      j < Math.min(coords[1] + 2, 8);
      j++
    ) {
      if (coords[0] == i && coords[1] == j) {
        continue;
      }
      possibleMoves.push([i, j]);
    }
  }
  console.log(possibleMoves);
  return possibleMoves;
};

// TODO: implement
export const getPossibleMoves = ({
  piece,
  board,
}: {
  piece: PieceProps;
  board: BoardArray;
}): MovesList => {
  let possibleMoves: MovesList = [];

  switch (piece.kind) {
    case 'king':
      possibleMoves = getKingPossibleMoves(piece.coords);
      break;

    default:
      possibleMoves = [];
      break;
  }
  return possibleMoves;
};

export const movePiece = ({
  board,
  piece,
  i,
  j,
  cb,
}: {
  board: BoardArray;
  piece: PieceProps;
  i: number;
  j: number;
  cb?: (board: BoardArray) => void;
}) => {
  // Early return if you try to move piece to the same square it occupies
  if (piece.coords[0] == i && piece.coords[1] == j) {
    return board;
  }

  if (canMove({ piece, board, i, j })) {
    // Clone the board as we don't want to mutate the original object
    const boardClone = clone(board);

    // Move the piece to the square with coordinates of [i, j]
    boardClone[i][j] = {
      kind: piece.kind,
      color: piece.color,
    };

    // Remove the piece from its previous square
    boardClone[piece.coords[0]][piece.coords[1]] = null;
    if (typeof cb == 'function') {
      cb(boardClone);
    }

    return boardClone;
  }

  return board;
};

export const canMove = ({
  piece,
  board,
  i,
  j,
}: {
  piece: PieceProps;
  board: BoardArray;
  i: number;
  j: number;
}) => {
  // If the move is part of the list of possible moves then return true, otherwise return false
  return getPossibleMoves({ piece, board }).some(
    move => move[0] == i && move[1] == j
  );
};
