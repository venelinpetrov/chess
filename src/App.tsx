import { useCallback } from 'react';
import './styles.css';

interface Piece {
  kind: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'black' | 'white';
}
interface PieceComponent extends Piece {
  coords: [number, number];
  onSelect: (p: Piece) => void;
}

const Piece = (p: PieceComponent) => {
  const { kind, color, coords, onSelect } = p;
  return (
    <div className="piece" onClick={() => onSelect(p)}>
      {`${color} ${kind}, ${JSON.stringify(coords)}`}
    </div>
  );
};

const Board = () => {
  const handleSelect = useCallback<PieceComponent['onSelect']>(
    (c) => console.log(c),
    []
  );
  const x: Array<Array<Piece | null>> = [
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

  return (
    <div className="board">
      {x.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <div key={j} className="cell">
              {cell
                ? Piece({ ...cell, onSelect: handleSelect, coords: [i, j] })
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
