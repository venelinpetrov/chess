import { useCallback, useEffect, useState } from 'react';
import { clone } from 'ramda';
import './styles.css';

type Board = Array<Array<Piece | null>>;
interface Piece {
  kind: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'black' | 'white';
}
interface PieceProps extends Piece {
  coords: [number, number];
  onSelect: (p: PieceProps) => void;
}

// TODO: implement
const getPossibleMoves = ({
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

const canMove = ({
  piece,
  board,
  i,
  j,
}: {
  piece: PieceProps;
  board: Board;
  i: number;
  j: number;
}) =>
  Boolean(
    getPossibleMoves({ piece, board }).find(
      move => move[0] == i && move[1] == j
    )
  );

const Piece = (p: PieceProps) => {
  const { kind, color, coords, onSelect } = p;
  return (
    <div
      className="piece"
      onClick={e => {
        e.stopPropagation();
        onSelect(p);
      }}
    >
      {`${color} ${kind}, ${JSON.stringify(coords)}`}
    </div>
  );
};

const Board = () => {
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
        const boardClone = clone(board);
        if (canMove({ piece: selectedPiece, board: boardClone, i, j })) {
          boardClone[i][j] = {
            kind: selectedPiece.kind,
            color: selectedPiece.color,
          };
          boardClone[selectedPiece.coords[0]][selectedPiece.coords[1]] = null;
          setBoard(boardClone);
          setSelectedPiece(null);
        }
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

const App = () => {
  return (
    <div className="App">
      <Board />
    </div>
  );
};

export default App;
