import { toyColors, type Toy, type ToyColor } from '@/data/toys';

interface PixelToyProps {
  toy: Toy;
  size?: number;
  className?: string;
}

const pixelColorMap: Record<string, (color: ToyColor) => string> = {
  W: () => '#F8F0F0',
  Y: () => '#F8DC60',
  B: () => '#90C0E8',
  P: () => '#E8C090',
  V: () => '#C8A0D8',
  G: () => '#90D090',
  H: () => '#E8B070',
  S: () => '#F8E060',
  e: () => '#3A2020',
  n: () => '#3A2020',
  m: () => '#3A2020',
  w: () => '#3A2020',
  s: () => '#3A2020',
  b: () => '#FF8040',
  o: () => '#FF9040',
  '*': () => '#FFD700',
  '_': () => 'transparent',
};

const getPixelColor = (char: string, toyColor: ToyColor): string => {
  if (char === '_') return 'transparent';
  const colorFn = pixelColorMap[char];
  if (colorFn) return colorFn(toyColor);
  return toyColors[toyColor].bg;
};

export default function PixelToy({ toy, size = 6, className = '' }: PixelToyProps) {
  const pixelSize = size;

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${toy.pixelArt[0].length}, ${pixelSize}px)`,
        gridTemplateRows: `repeat(${toy.pixelArt.length}, ${pixelSize}px)`,
        imageRendering: 'pixelated',
      }}
    >
      {toy.pixelArt.flat().map((char, idx) => (
        <div
          key={idx}
          style={{
            width: pixelSize,
            height: pixelSize,
            backgroundColor: getPixelColor(char, toy.color),
          }}
        />
      ))}
    </div>
  );
}
