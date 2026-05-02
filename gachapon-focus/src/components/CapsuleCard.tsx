import { toyColors, type Toy, type ToyColor } from '@/data/toys';
import PixelToy from './PixelToy';

interface CapsuleCardProps {
  toy: Toy;
  mini?: boolean;
  style?: React.CSSProperties;
  className?: string;
  rotation?: number;
}

const colorNames: Record<ToyColor, string> = {
  pink: '#F4B8C4',
  green: '#B8DDB8',
  purple: '#C8B0D8',
  yellow: '#F8E090',
  blue: '#A8CCE8',
  peach: '#F0C8A0',
};

export default function CapsuleCard({ toy, mini = false, style, className = '', rotation = 0 }: CapsuleCardProps) {
  const colors = toyColors[toy.color];
  const cardW = mini ? 56 : 100;
  const cardH = mini ? 72 : 128;
  const pixelSize = mini ? 4 : 8;
  const borderW = mini ? 3 : 5;
  const innerH = mini ? 32 : 60;

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        width: cardW,
        height: cardH,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      {/* Polaroid-style card frame */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#F8F4F0',
          border: `${borderW}px solid #E0D8D0`,
          borderRadius: mini ? 4 : 6,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '2px 2px 0 rgba(0,0,0,0.15)',
        }}
      >
        {/* Upper window showing toy */}
        <div
          style={{
            flex: 1,
            backgroundColor: colorNames[toy.color],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <PixelToy toy={toy} size={pixelSize} />
        </div>
        {/* Colored bottom strip */}
        <div
          style={{
            height: innerH,
            backgroundColor: colors.bg,
            borderTop: `${mini ? 2 : 3}px solid ${colors.border}`,
          }}
        />
      </div>
    </div>
  );
}
