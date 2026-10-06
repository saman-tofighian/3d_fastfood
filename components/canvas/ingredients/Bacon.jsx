'use client';

export default function Bacon({ length = 1.1 }) {
  const segments = 4;
  const segLength = length / segments;

  return (
    <group>
      {Array.from({ length: segments }).map((_, i) => {
        const offset = (i - (segments - 1) / 2) * segLength;
        const waveY = Math.sin(i * 1.3) * 0.02;
        const waveRot = Math.sin(i * 1.7) * 0.15;
        return (
          <group key={i} position={[offset, waveY, 0]} rotation={[0, 0, waveRot]}>
            <mesh castShadow>
              <boxGeometry args={[segLength * 1.1, 0.03, 0.28]} />
              <meshStandardMaterial color={i % 2 === 0 ? '#8A3A2B' : '#C97A6A'} roughness={0.5} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
