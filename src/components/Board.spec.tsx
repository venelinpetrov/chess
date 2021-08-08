import { render, screen } from '@testing-library/react';
import { Board, BoardArray } from './Board';

describe('Board', () => {
  let board: BoardArray;
  beforeEach(() => {
    board = [
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
  });
  describe('Board rendering', () => {
    it('Renders 8 x 8 board', () => {
      render(<Board initialBoard={board} />);

      const cells = screen.getAllByRole('cell');
      expect(cells.length).toBe(64);
    });
  });

  describe('Turn', () => {
    it('Renders 1 white king and 1 black king', () => {
      render(<Board initialBoard={board} />);

      expect(screen.getAllByLabelText(/white king/).length).toBe(1);
      expect(screen.getAllByLabelText(/black king/).length).toBe(1);
    });

    // eslint-disable-next-line quotes
    it("It's white's turn at the beginning of the game", () => {
      render(<Board initialBoard={board} />);

      expect(screen.getByLabelText('turn: white')).toBeInTheDocument();
    });

    it('Able to select white piece in the beginning', () => {
      render(<Board initialBoard={board} />);

      screen.getByLabelText(/white king/).click();
      expect(screen.getByLabelText(/white king selected/)).toBeInTheDocument();
    });

    it('Not able to select black piece in the beginning', () => {
      render(<Board initialBoard={board} />);

      screen.getByLabelText(/white king/).click();
      expect(screen.queryByLabelText(/black king selected/)).toBe(null);
    });

    it('Turn changes when white piece is moved and you are able to select black piece', () => {
      render(<Board initialBoard={board} />);

      screen.getByLabelText(/white king/).click();
      screen.getAllByRole('cell')[2].click();
      expect(screen.getByLabelText('turn: black')).toBeInTheDocument();

      screen.getByLabelText(/black king/).click();
      expect(screen.getByLabelText(/black king selected/)).toBeInTheDocument();
    });
  });
});
