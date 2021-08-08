export interface Piece {
  kind: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'black' | 'white';
}
export interface PieceProps extends Piece {
  coords: [number, number];
  onSelect: (p: PieceProps) => void;
}

export const Piece = (p: PieceProps) => {
  const { kind, color, coords, onSelect } = p;
  return (
    <div
      className="piece"
      onClick={() => {
        onSelect(p);
      }}
    >
      {`${color} ${kind}, ${JSON.stringify(coords)}`}
    </div>
  );
};
