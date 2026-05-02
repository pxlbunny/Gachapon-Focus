import CapsuleCard from './CapsuleCard';
import type { Toy } from '@/data/toys';

interface CollectedToy {
  toy: Toy;
  collectedAt: Date;
  task: string;
}

interface CollectionDisplayProps {
  collection: CollectedToy[];
}

export default function CollectionDisplay({ collection }: CollectionDisplayProps) {
  if (collection.length === 0) {
    return (
      <div
        className="text-center py-10"
        style={{ color: 'hsl(var(--muted-foreground))' }}
        data-testid="collection-empty"
      >
        <div style={{ fontSize: 48, marginBottom: 8 }}>
          <span style={{
            display: 'inline-block',
            width: 48,
            height: 48,
            backgroundColor: 'hsl(var(--muted))',
            borderRadius: '50%',
          }} />
        </div>
        <p style={{ fontFamily: "'Mountains of Christmas', cursive", fontSize: 18, fontWeight: 700 }}>
          No toys yet!
        </p>
        <p style={{ fontFamily: "'Mountains of Christmas', cursive", fontSize: 14 }}>
          Spin the machine and complete your tasks to collect them.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3
        style={{
          fontFamily: "'Mountains of Christmas', cursive",
          fontSize: 22,
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 16,
          color: 'hsl(var(--foreground))',
        }}
      >
        My Collection ({collection.length})
      </h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
        }}
      >
        {collection.map((item, i) => (
          <div
            key={i}
            data-testid={`collected-toy-${i}`}
            style={{ textAlign: 'center' }}
            title={`${item.toy.name} — Task: ${item.task}`}
          >
            <CapsuleCard toy={item.toy} mini />
            <p
              style={{
                fontFamily: "'Mountains of Christmas', cursive",
                fontSize: 11,
                fontWeight: 700,
                marginTop: 4,
                color: 'hsl(var(--foreground))',
              }}
            >
              {item.toy.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
