'use client';

export default function OnionRing({ radius = 0.6 }) {
  const rings = [radius, radius * 0.72, radius * 0.44];

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {rings.map((r, i) => (
        <mesh key={i} castShadow>
          <torusGeometry args={[r, 0.025, 8, 28]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#F2EAF2' : '#D9B8E0'} roughness={0.3} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}
