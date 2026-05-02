import { useState, useEffect, useRef } from 'react';
import CapsuleCard from './CapsuleCard';
import { toys } from '@/data/toys';

interface GachaponMachineProps {
  isSpinning: boolean;
  onSpin: () => void;
}

const MACHINE_TOYS = [
  { toy: toys[0], x: 30, y: 20, r: -15 },
  { toy: toys[1], x: 80, y: 10, r: 8 },
  { toy: toys[2], x: 130, y: 30, r: -5 },
  { toy: toys[3], x: 15, y: 70, r: 12 },
  { toy: toys[4], x: 70, y: 65, r: -10 },
  { toy: toys[5], x: 120, y: 55, r: 20 },
  { toy: toys[6], x: 35, y: 120, r: -8 },
  { toy: toys[7], x: 90, y: 115, r: 15 },
  { toy: toys[0], x: 140, y: 105, r: -18 },
  { toy: toys[2], x: 55, y: 160, r: 5 },
  { toy: toys[4], x: 110, y: 155, r: -12 },
];

export default function GachaponMachine({ isSpinning, onSpin }: GachaponMachineProps) {
  const [isShaking, setIsShaking] = useState(false);
  const [capsuleOffsets, setCapsuleOffsets] = useState(
    MACHINE_TOYS.map(() => ({ dy: 0, dx: 0 }))
  );
  const animRef = useRef<number | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    if (isSpinning) {
      setIsShaking(true);

      const animate = () => {
        frameRef.current++;
        const t = frameRef.current;
        setCapsuleOffsets(
          MACHINE_TOYS.map((_, i) => ({
            dy: Math.sin((t / 4) + i * 1.2) * 5,
            dx: Math.cos((t / 5) + i * 0.8) * 3,
          }))
        );
        animRef.current = requestAnimationFrame(animate);
      };

      animRef.current = requestAnimationFrame(animate);

      const timer = setTimeout(() => {
        setIsShaking(false);
        if (animRef.current) cancelAnimationFrame(animRef.current);
        setCapsuleOffsets(MACHINE_TOYS.map(() => ({ dy: 0, dx: 0 })));
      }, 1500);

      return () => {
        clearTimeout(timer);
        if (animRef.current) cancelAnimationFrame(animRef.current);
      };
    }
  }, [isSpinning]);

  return (
    <div className="flex flex-col items-center select-none">
      {/* Machine body */}
      <div
        className={isShaking ? 'machine-shake' : ''}
        style={{
          position: 'relative',
          width: 220,
        }}
      >
        {/* Main glass globe */}
        <div
          style={{
            width: 200,
            height: 220,
            margin: '0 auto',
            backgroundColor: '#C8DFF0',
            border: '8px solid #8AB8D8',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: 'inset -15px -15px 30px rgba(255,255,255,0.4), inset 5px 5px 15px rgba(100,140,180,0.3), 0 4px 16px rgba(100,140,180,0.4)',
          }}
        >
          {/* Capsule cards inside */}
          {MACHINE_TOYS.map((item, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: item.x + capsuleOffsets[i].dx,
                top: item.y + capsuleOffsets[i].dy,
                transition: isSpinning ? 'none' : 'all 0.3s ease',
              }}
            >
              <CapsuleCard toy={item.toy} mini rotation={item.r} />
            </div>
          ))}

          {/* Glass glare */}
          <div
            style={{
              position: 'absolute',
              top: 15,
              left: 25,
              width: 60,
              height: 60,
              background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Machine body/base */}
        <div
          style={{
            width: 180,
            margin: '0 auto',
            marginTop: -10,
            backgroundColor: '#7AAED8',
            borderRadius: '0 0 12px 12px',
            padding: '16px 20px 10px',
            border: '4px solid #5090C0',
            borderTop: 'none',
            boxShadow: '0 4px 8px rgba(80,120,160,0.3)',
          }}
        >
          {/* POTAFE label (like in the screenshot) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            {/* Spin wheel button */}
            <button
              data-testid="spin-button"
              onClick={onSpin}
              disabled={isSpinning}
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '4px solid #90C0E0',
                cursor: isSpinning ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 2,
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                transition: 'transform 0.1s',
                transform: isSpinning ? 'scale(0.95)' : 'scale(1)',
              }}
            >
              <span
                style={{
                  fontSize: 8,
                  fontFamily: "'Mountains of Christmas', cursive",
                  fontWeight: 700,
                  color: '#5090C0',
                  letterSpacing: 2,
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  lineHeight: 1,
                }}
              >
                SPIN
              </span>
              {isSpinning ? (
                <div
                  className="spin-wheel"
                  style={{
                    width: 16,
                    height: 16,
                    border: '2px solid #5090C0',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#5090C0',
                    borderRadius: '50%',
                  }}
                />
              )}
            </button>

            {/* Capsule dispenser slot */}
            <div
              style={{
                flex: 1,
                height: 50,
                backgroundColor: '#5888C0',
                borderRadius: 8,
                border: '3px solid #4070A8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '70%',
                  height: 30,
                  backgroundColor: '#3A5880',
                  borderRadius: 4,
                  border: '2px solid #2A4060',
                }}
              />
            </div>
          </div>
        </div>

        {/* Machine stand */}
        <div
          style={{
            width: 160,
            height: 16,
            margin: '0 auto',
            backgroundColor: '#5090C0',
            borderRadius: '0 0 8px 8px',
            border: '3px solid #3070A0',
            borderTop: 'none',
          }}
        />
        <div
          style={{
            width: 120,
            height: 10,
            margin: '0 auto',
            backgroundColor: '#4080B0',
            borderRadius: '0 0 6px 6px',
          }}
        />
      </div>
    </div>
  );
}
