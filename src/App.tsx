import './styles.css';
import { Board, BoardArray } from './components/Board';

const App = () => {
  const initialBoard: BoardArray = [
    [
      null,
      { kind: 'king', color: 'white' },
      null,
      null,
      null,
      null,
      null,
      { kind: 'bishop', color: 'white' },
    ],
    [null, null, null, null, null, null, null, null],
    [
      null,
      null,
      null,
      { kind: 'king', color: 'black' },
      null,
      null,
      null,
      null,
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      null,
      null,
      { kind: 'knight', color: 'black' },
      null,
      null,
      null,
      null,
      null,
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ];
  return (
    <div className="App">
      <Board initialBoard={initialBoard} />
    </div>
  );
};

export default App;
