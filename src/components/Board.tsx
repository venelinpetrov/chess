import { useCallback, useEffect, useState } from 'react';
import { Piece, PieceProps } from './Piece';
import { movePiece } from '../utils';

export type Board = Array<Array<Piece | null>>;

export const Board = () => {
  const exampleBoard: Board = [
    [
      null,
      { kind: 'rook', color: 'white' },
      { kind: 'king', color: 'black' },
      null,
      null,
      null,
      null,
      null,
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ];

  const [board, setBoard] = useState(exampleBoard);
  const [selectedPiece, setSelectedPiece] = useState<PieceProps | null>(null);

  const handlePieceSelect = useCallback<PieceProps['onSelect']>(
    p => setSelectedPiece(p),
    []
  );

  const handleSquareClick = useCallback(
    (i, j) => () => {
      if (selectedPiece) {
        const newBoard = movePiece({ board, piece: selectedPiece, i, j });
        setBoard(newBoard);
        setSelectedPiece(null);
      }
      console.log(i, j);
    },
    [board, selectedPiece]
  );

  useEffect(() => {
    console.log('selected piece', selectedPiece);
  }, [selectedPiece]);

  return (
    <div className="board">
      {board.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <div key={j} className="cell" onClick={handleSquareClick(i, j)}>
              {cell
                ? Piece({
                    ...cell,
                    onSelect: handlePieceSelect,
                    coords: [i, j],
                  })
                : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
