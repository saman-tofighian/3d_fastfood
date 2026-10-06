'use client';

import { useMemo } from 'react';

const GREENS = ['#6FBF5B', '#5FAE4C', '#7FC96C'];

export default function Lettuce({ radius = 0.72 }) {
  const leaves = useMemo(() => {
    const list = [];
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2 + Math.random() * 0.4;
      const r = radius * (0.35 + Math.random() * 0.3);
      list.push({
        x: Math.cos(angle) * r,
        z: Math.sin(angle) * r,
        rotY: Math.random() * Math.PI * 2,
        tilt: (Math.random() - 0.5) * 0.5,
        color: GREENS[i % GREENS.length],
        scale: 0.55 + Math.random() * 0.25,
      });
    }
    return list;
  }, [radius]);

  return (
    <group>
      {leaves.map((leaf, i) => (
        <mesh
          key={i}
          position={[leaf.x, 0, leaf.z]}
          rotation={[leaf.tilt, leaf.rotY, Math.PI / 2]}
          scale={leaf.scale}
          castShadow
        >
          <torusGeometry args={[radius * 0.5, 0.05, 6, 10, Math.PI * 0.7]} />
          <meshStandardMaterial color={leaf.color} roughness={0.75} side={2} />
        </mesh>
      ))}
    </group>
  );
}
