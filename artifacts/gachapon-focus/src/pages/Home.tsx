import { useState, useCallback } from 'react';
import GachaponMachine from '@/components/GachaponMachine';
import TaskModal from '@/components/TaskModal';
import CollectionDisplay from '@/components/CollectionDisplay';
import Confetti from '@/components/Confetti';
import CapsuleCard from '@/components/CapsuleCard';
import { getRandomToy, getRandomTask, type Toy } from '@/data/toys';

interface CollectedToy {
  toy: Toy;
  collectedAt: Date;
  task: string;
}

type AppState = 'idle' | 'spinning' | 'task' | 'celebrating';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [currentToy, setCurrentToy] = useState<Toy | null>(null);
  const [currentTask, setCurrentTask] = useState<string>('');
  const [collection, setCollection] = useState<CollectedToy[]>([]);
  const [showCollection, setShowCollection] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [justCollected, setJustCollected] = useState<CollectedToy | null>(null);

  const handleSpin = useCallback(() => {
    if (appState !== 'idle') return;
    setAppState('spinning');

    const toy = getRandomToy();
    const task = getRandomTask(toy);
    setCurrentToy(toy);
    setCurrentTask(task);

    setTimeout(() => {
      setAppState('task');
    }, 1600);
  }, [appState]);

  const handleTaskComplete = useCallback(() => {
    if (!currentToy) return;
    const newItem: CollectedToy = {
      toy: currentToy,
      collectedAt: new Date(),
      task: currentTask,
    };
    setCollection((prev) => [...prev, newItem]);
    setJustCollected(newItem);
    setAppState('celebrating');
    setConfettiActive(true);

    setTimeout(() => {
      setConfettiActive(false);
      setAppState('idle');
      setCurrentToy(null);
      setCurrentTask('');
      setJustCollected(null);
    }, 3000);
  }, [currentToy, currentTask]);

  const handleDismiss = useCallback(() => {
    setAppState('idle');
    setCurrentToy(null);
    setCurrentTask('');
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #F5E8D8 0%, #EDD5C0 50%, #E8CFC5 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '24px 16px 40px',
        fontFamily: "'Mountains of Christmas', cursive",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Confetti */}
      <Confetti active={confettiActive} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h1
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: '#5A7FA8',
            margin: 0,
            textShadow: '2px 2px 0 rgba(255,255,255,0.6)',
            lineHeight: 1,
          }}
          data-testid="app-title"
        >
          Gachapon Focus
        </h1>
        <p
          style={{
            fontSize: 16,
            color: '#8A6850',
            margin: '6px 0 0',
            fontWeight: 400,
          }}
        >
          Spin to earn your cute companion!
        </p>
      </div>

      {/* Collection button */}
      <button
        data-testid="view-collection"
        onClick={() => setShowCollection(!showCollection)}
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          fontFamily: "'Mountains of Christmas', cursive",
          fontSize: 14,
          fontWeight: 700,
          padding: '8px 16px',
          borderRadius: 20,
          border: '3px solid #A8CCE8',
          backgroundColor: '#C8DFF0',
          color: '#3A6A90',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        My Collection
        {collection.length > 0 && (
          <span
            style={{
              display: 'inline-block',
              marginLeft: 6,
              backgroundColor: '#5090C0',
              color: 'white',
              borderRadius: '50%',
              width: 20,
              height: 20,
              fontSize: 12,
              lineHeight: '20px',
              textAlign: 'center',
            }}
          >
            {collection.length}
          </span>
        )}
      </button>

      {/* Celebration overlay */}
      {appState === 'celebrating' && justCollected && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
            pointerEvents: 'none',
          }}
        >
          <div
            className="celebrate"
            style={{
              backgroundColor: '#FFF8F4',
              borderRadius: 24,
              padding: '32px 48px',
              textAlign: 'center',
              border: `6px solid ${['#E48898','#D0B040','#88BB88','#6098C8','#A080B8'][
                Math.floor(Math.random() * 5)
              ]}`,
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{ marginBottom: 12 }}>
              <CapsuleCard toy={justCollected.toy} />
            </div>
            <p style={{ fontSize: 32, fontWeight: 700, color: '#5A7FA8', margin: 0 }}>
              {justCollected.toy.name} collected!
            </p>
            <p style={{ fontSize: 16, color: '#8A6850', marginTop: 8 }}>
              Great work on your focus task!
            </p>
          </div>
        </div>
      )}

      {/* Main content */}
      {!showCollection ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          {/* Status message */}
          <div
            style={{
              textAlign: 'center',
              minHeight: 32,
              fontFamily: "'Mountains of Christmas', cursive",
            }}
          >
            {appState === 'idle' && (
              <p
                style={{ fontSize: 18, color: '#8A6850', margin: 0 }}
                data-testid="status-idle"
              >
                Press SPIN to get a new friend!
              </p>
            )}
            {appState === 'spinning' && (
              <p
                style={{ fontSize: 18, color: '#5A7FA8', margin: 0, fontWeight: 700 }}
                data-testid="status-spinning"
              >
                Spinning...
              </p>
            )}
          </div>

          {/* Gachapon Machine */}
          <GachaponMachine
            isSpinning={appState === 'spinning'}
            onSpin={handleSpin}
          />

          {/* Instructions */}
          {appState === 'idle' && (
            <div
              style={{
                textAlign: 'center',
                maxWidth: 280,
                backgroundColor: 'rgba(255,255,255,0.5)',
                borderRadius: 16,
                padding: '12px 20px',
                border: '2px solid rgba(160,200,220,0.4)',
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: '#7A6050',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Spin the machine to get a toy capsule.
                Complete the focus task to add it to your collection!
              </p>
            </div>
          )}

          {/* Mini collection preview */}
          {collection.length > 0 && (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 14, color: '#8A6850', marginBottom: 8 }}>
                Recently collected:
              </p>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                {collection.slice(-5).map((item, i) => (
                  <CapsuleCard
                    key={i}
                    toy={item.toy}
                    mini
                    rotation={(i % 3 - 1) * 5}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Collection view */
        <div
          style={{
            width: '100%',
            maxWidth: 560,
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderRadius: 20,
            padding: 24,
            border: '3px solid rgba(160,200,220,0.5)',
          }}
          data-testid="collection-panel"
        >
          <CollectionDisplay collection={collection} />
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <button
              onClick={() => setShowCollection(false)}
              style={{
                fontFamily: "'Mountains of Christmas', cursive",
                fontSize: 16,
                fontWeight: 700,
                padding: '10px 24px',
                borderRadius: 20,
                border: '3px solid #A8CCE8',
                backgroundColor: '#C8DFF0',
                color: '#3A6A90',
                cursor: 'pointer',
              }}
            >
              Back to Machine
            </button>
          </div>
        </div>
      )}

      {/* Task Modal */}
      <TaskModal
        toy={currentToy}
        task={currentTask}
        onComplete={handleTaskComplete}
        onDismiss={handleDismiss}
        isOpen={appState === 'task'}
      />
    </div>
  );
}
