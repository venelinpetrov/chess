import { useCallback, useEffect, useState } from 'react';
import { clone } from 'ramda';
import { Piece, PieceProps } from './Piece';
import { getPossibleMoves, movePiece } from '../utils';

export interface Square {
  piece: Piece | null;
  attackedBy: Piece[];
  showLegalMove: boolean;
}

export type BoardArray = Square[][];

const isPieceSelected = ({
  piece,
  i,
  j,
}: {
  piece: PieceProps | null;
  i: number;
  j: number;
}) => {
  if (!piece) {
    return false;
  }

  return piece.coords[0] == i && piece.coords[1] == j;
};
export const Board = ({ initialBoard }: { initialBoard: BoardArray }) => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState<PieceProps | null>(null);
  const [turn, setTurn] = useState<Piece['color']>('white');

  const handlePieceSelect = useCallback<PieceProps['onSelect']>(
    p => {
      if (p.color == turn) {
        setSelectedPiece(p);
      }
    },
    [turn]
  );

  const handleSquareClick = useCallback(
    (i, j) => () => {
      if (selectedPiece) {
        movePiece({
          board,
          piece: selectedPiece,
          i,
          j,
          cb: newBoard => {
            if (turn == 'white') {
              setTurn('black');
            } else {
              setTurn('white');
            }
            setBoard(newBoard);
            setSelectedPiece(null);
          },
        });
      }
      console.log(i, j);
    },
    [board, selectedPiece, turn]
  );

  useEffect(() => {
    console.log('selected piece', selectedPiece);
    console.log('turn', turn);
  }, [selectedPiece, turn]);

  return (
    <div className="panel">
      <div className="board">
        {board.map((row, i) =>
          row.map((square, j) => (
            <div
              key={j}
              className="cell"
              onClick={handleSquareClick(i, j)}
              role="cell"
            >
              {square.piece != null
                ? Piece({
                    ...square.piece,
                    coords: [i, j],
                    selected: isPieceSelected({ piece: selectedPiece, i, j }),
                    onSelect: handlePieceSelect,
                  })
                : null}
            </div>
          ))
        )}
      </div>
      <div className="panel__turn" aria-label={`turn: ${turn}`}>
        Turn: {turn}
      </div>
    </div>
  );
};
