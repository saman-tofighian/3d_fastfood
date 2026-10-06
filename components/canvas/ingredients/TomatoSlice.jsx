'use client';

import { useMemo } from 'react';

export default function TomatoSlice({ radius = 0.58 }) {
  const seeds = useMemo(() => {
    const list = [];
    const ringCount = 5;
    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2;
      list.push({ x: Math.cos(angle) * radius * 0.4, z: Math.sin(angle) * radius * 0.4 });
    }
    return list;
  }, [radius]);

  return (
    <group>
      {/* پوست قرمز بیرونی */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius, 0.065, 24]} />
        <meshStandardMaterial color="#C1382E" roughness={0.3} />
      </mesh>
      {/* مغز صورتی‌روشن داخل */}
      <mesh position={[0, 0.034, 0]}>
        <cylinderGeometry args={[radius * 0.82, radius * 0.82, 0.005, 24]} />
        <meshStandardMaterial color="#E8988C" roughness={0.4} />
      </mesh>
      {/* دونه‌های کوچیک زرد داخل مغز */}
      {seeds.map((s, i) => (
        <mesh key={i} position={[s.x, 0.038, s.z]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.03, 1]}>
          <circleGeometry args={[1, 8]} />
          <meshStandardMaterial color="#F2D98A" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}
