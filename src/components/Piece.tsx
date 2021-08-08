export interface Piece {
  kind: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'black' | 'white';
}
export interface PieceProps extends Piece {
  coords: [number, number];
  selected: boolean;
  onSelect: (p: PieceProps) => void;
}

export const Piece = (p: PieceProps) => {
  const { kind, color, coords, selected, onSelect } = p;
  return (
    <div
      aria-label={`${color} ${kind} ${selected && 'selected'}`}
      className={'piece' + ` ${selected ? '-selected' : ''}`}
      onClick={() => {
        onSelect(p);
      }}
    >
      {`${color} ${kind}, ${JSON.stringify(coords)}`}
    </div>
  );
};
