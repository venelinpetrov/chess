import './styles.css';
import { Board, BoardArray } from './components/Board';

const App = () => {
  const initialBoard: BoardArray = [
    [
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        piece: { kind: 'king', color: 'white' },
        showLegalMove: false,
        attackedBy: [],
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },

      {
        piece: { kind: 'bishop', color: 'white' },
        showLegalMove: false,
        attackedBy: [],
      },
    ],
    [
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
    ],
    [
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        piece: { kind: 'king', color: 'black' },
        showLegalMove: false,
        attackedBy: [],
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
    ],
    [
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
    ],
    [
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
    ],
    [
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        piece: { kind: 'knight', color: 'black' },
        showLegalMove: false,
        attackedBy: [],
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
    ],
    [
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
    ],
    [
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
      {
        attackedBy: [],
        piece: null,
        showLegalMove: false,
      },
    ],
  ];
  return (
    <div className="App">
      <Board initialBoard={initialBoard} />
    </div>
  );
};

export default App;
