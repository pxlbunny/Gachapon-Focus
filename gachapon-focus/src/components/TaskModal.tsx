import { useState, useEffect } from 'react';
import CapsuleCard from './CapsuleCard';
import PixelToy from './PixelToy';
import type { Toy } from '@/data/toys';
import { toyColors } from '@/data/toys';

interface TaskModalProps {
  toy: Toy | null;
  task: string;
  onComplete: () => void;
  onDismiss: () => void;
  isOpen: boolean;
}

export default function TaskModal({ toy, task, onComplete, onDismiss, isOpen }: TaskModalProps) {
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerDone, setTimerDone] = useState(false);
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAppeared(true), 50);
      setTimerActive(false);
      setTimerDone(false);
      setTimeLeft(25 * 60);
    } else {
      setAppeared(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!timerActive) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimerActive(false);
          setTimerDone(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive]);

  if (!isOpen || !toy) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const colors = toyColors[toy.color];
  const progress = 1 - timeLeft / (25 * 60);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        backdropFilter: 'blur(4px)',
        transition: 'opacity 0.3s',
        opacity: appeared ? 1 : 0,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onDismiss();
      }}
    >
      <div
        data-testid="task-modal"
        style={{
          backgroundColor: '#FFF8F4',
          borderRadius: 20,
          padding: 32,
          maxWidth: 400,
          width: '90%',
          border: `4px solid ${colors.border}`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.2), 0 0 0 8px ${colors.bg}40`,
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: appeared ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(40px)',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div className={appeared ? 'capsule-pop' : ''} style={{ display: 'inline-block', marginBottom: 8 }}>
            <CapsuleCard toy={toy} />
          </div>
          <h2
            style={{
              fontFamily: "'Mountains of Christmas', cursive",
              fontSize: 28,
              fontWeight: 700,
              color: 'hsl(var(--foreground))',
              margin: 0,
            }}
          >
            You got a {toy.name}!
          </h2>
          <p
            style={{
              fontFamily: "'Mountains of Christmas', cursive",
              fontSize: 14,
              color: 'hsl(var(--muted-foreground))',
              marginTop: 4,
            }}
          >
            {toy.description}
          </p>
        </div>

        {/* Task box */}
        <div
          style={{
            backgroundColor: colors.light,
            border: `3px solid ${colors.border}`,
            borderRadius: 12,
            padding: '16px 20px',
            marginBottom: 20,
            textAlign: 'center',
          }}
          data-testid="task-description"
        >
          <p
            style={{
              fontFamily: "'Mountains of Christmas', cursive",
              fontSize: 12,
              fontWeight: 700,
              color: colors.shadow,
              textTransform: 'uppercase',
              letterSpacing: 2,
              marginBottom: 6,
            }}
          >
            Your Focus Task
          </p>
          <p
            style={{
              fontFamily: "'Mountains of Christmas', cursive",
              fontSize: 20,
              fontWeight: 700,
              color: 'hsl(var(--foreground))',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {task}
          </p>
        </div>

        {/* Timer */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          {!timerDone ? (
            <>
              <div
                style={{
                  fontSize: 40,
                  fontFamily: "'Mountains of Christmas', cursive",
                  fontWeight: 700,
                  color: timerActive ? colors.shadow : 'hsl(var(--muted-foreground))',
                  letterSpacing: 2,
                  marginBottom: 8,
                }}
                data-testid="timer-display"
              >
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: 8,
                  backgroundColor: 'hsl(var(--muted))',
                  borderRadius: 4,
                  overflow: 'hidden',
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${progress * 100}%`,
                    backgroundColor: colors.border,
                    borderRadius: 4,
                    transition: 'width 1s linear',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                <button
                  data-testid="timer-toggle"
                  onClick={() => setTimerActive(!timerActive)}
                  style={{
                    fontFamily: "'Mountains of Christmas', cursive",
                    fontSize: 16,
                    fontWeight: 700,
                    padding: '8px 20px',
                    borderRadius: 20,
                    border: `3px solid ${colors.border}`,
                    backgroundColor: colors.bg,
                    color: 'hsl(var(--foreground))',
                    cursor: 'pointer',
                    transition: 'transform 0.1s',
                  }}
                >
                  {timerActive ? 'Pause' : timeLeft < 25 * 60 ? 'Resume' : 'Start Timer'}
                </button>
                <button
                  data-testid="timer-reset"
                  onClick={() => { setTimerActive(false); setTimeLeft(25 * 60); }}
                  style={{
                    fontFamily: "'Mountains of Christmas', cursive",
                    fontSize: 16,
                    fontWeight: 700,
                    padding: '8px 16px',
                    borderRadius: 20,
                    border: '3px solid hsl(var(--border))',
                    backgroundColor: 'hsl(var(--muted))',
                    color: 'hsl(var(--muted-foreground))',
                    cursor: 'pointer',
                  }}
                >
                  Reset
                </button>
              </div>
            </>
          ) : (
            <div
              style={{
                padding: '12px 20px',
                backgroundColor: '#D8F0D8',
                border: '3px solid #88BB88',
                borderRadius: 12,
                fontFamily: "'Mountains of Christmas', cursive",
                fontSize: 18,
                fontWeight: 700,
                color: '#3A6A3A',
              }}
              data-testid="timer-done"
            >
              Time is up! Did you finish your task?
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button
            data-testid="complete-task"
            onClick={onComplete}
            style={{
              fontFamily: "'Mountains of Christmas', cursive",
              fontSize: 18,
              fontWeight: 700,
              padding: '12px 28px',
              borderRadius: 24,
              border: 'none',
              backgroundColor: colors.border,
              color: '#FFFFFF',
              cursor: 'pointer',
              boxShadow: `0 4px 0 ${colors.shadow}`,
              transition: 'transform 0.1s, box-shadow 0.1s',
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 0 ${colors.shadow}`;
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLElement).style.transform = '';
              (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 0 ${colors.shadow}`;
            }}
          >
            Task Done! Take the Toy
          </button>
          <button
            data-testid="dismiss-task"
            onClick={onDismiss}
            style={{
              fontFamily: "'Mountains of Christmas', cursive",
              fontSize: 16,
              fontWeight: 700,
              padding: '12px 18px',
              borderRadius: 24,
              border: '3px solid hsl(var(--border))',
              backgroundColor: 'hsl(var(--muted))',
              color: 'hsl(var(--muted-foreground))',
              cursor: 'pointer',
            }}
          >
            Not Yet
          </button>
        </div>
      </div>
    </div>
  );
}
