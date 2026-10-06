'use client';

export default function HamSlice({ width = 1.1, depth = 0.75 }) {
  return (
    <group>
      <mesh position={[0, 0, 0]} rotation={[0, 0.08, 0]} castShadow>
        <boxGeometry args={[width, 0.05, depth]} />
        <meshStandardMaterial color="#D98A8A" roughness={0.45} />
      </mesh>
      <mesh position={[0.02, 0.028, 0.03]} rotation={[0, -0.1, 0]}>
        <boxGeometry args={[width * 0.9, 0.02, depth * 0.85]} />
        <meshStandardMaterial color="#C97A7A" roughness={0.45} />
      </mesh>
    </group>
  );
}
