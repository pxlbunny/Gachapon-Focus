import { useEffect, useState } from 'react';

const COLORS = ['#F4B8C4', '#F8E090', '#B8DDB8', '#A8CCE8', '#C8B0D8', '#F0C8A0', '#FF9FB3', '#FFD580'];

interface Particle {
  id: number;
  x: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  shape: 'square' | 'circle' | 'rect';
}

interface ConfettiProps {
  active: boolean;
}

export default function Confetti({ active }: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (active) {
      const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 10 + 6,
        duration: Math.random() * 2 + 1.5,
        delay: Math.random() * 0.5,
        shape: ['square', 'circle', 'rect'][Math.floor(Math.random() * 3)] as Particle['shape'],
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: -20,
            width: p.shape === 'rect' ? p.size * 1.5 : p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'rect' ? 2 : 2,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
