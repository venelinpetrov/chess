import { clone } from 'ramda';
import { PieceProps } from '../components/Piece';
import { Board } from '../components/Board';

// TODO: implement
export const getPossibleMoves = ({
  piece,
  board,
}: {
  piece: PieceProps;
  board: Board;
}): Array<[number, number]> => {
  return [
    [0, 3],
    [0, 2],
  ];
};

export const movePiece = ({
  board,
  piece,
  i,
  j,
}: {
  board: Board;
  piece: PieceProps;
  i: number;
  j: number;
}) => {
  if (canMove({ piece, board, i, j })) {
    const boardClone = clone(board);

    boardClone[i][j] = {
      kind: piece.kind,
      color: piece.color,
    };
    boardClone[piece.coords[0]][piece.coords[1]] = null;

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
  board: Board;
  i: number;
  j: number;
}) => {
  return getPossibleMoves({ piece, board }).some(
    move => move[0] == i && move[1] == j
  );
};
