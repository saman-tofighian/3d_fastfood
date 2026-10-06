'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

export default function BunTop({ color = '#D9A24B', radius = 0.66 }) {
  const geometry = useMemo(() => {
    const s = radius / 0.66;
    const pts = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.58 * s, 0),
      new THREE.Vector2(0.62 * s, 0.08 * s),
      new THREE.Vector2(0.52 * s, 0.22 * s),
      new THREE.Vector2(0.22 * s, 0.3 * s),
      new THREE.Vector2(0, 0.32 * s),
    ];
    return new THREE.LatheGeometry(pts, 28);
  }, [radius]);

  // دونه‌های کنجد - پخش‌شده روی گنبد، با yOffset متناسب با فاصله از مرکز (برای نشستن روی انحنای نون)
  const seeds = useMemo(() => {
    const list = [];
    for (let i = 0; i < 16; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * radius * 0.75;
      const heightAtR = 0.3 * (1 - (r / radius) ** 1.6);
      list.push({
        x: Math.cos(a) * r,
        z: Math.sin(a) * r,
        y: heightAtR + 0.01,
        rot: Math.random() * Math.PI,
      });
    }
    return list;
  }, [radius]);

  return (
    <group>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      {seeds.map((s, i) => (
        <mesh key={i} position={[s.x, s.y, s.z]} rotation={[Math.PI / 2, 0, s.rot]} scale={[0.035, 0.018, 0.02]}>
          <sphereGeometry args={[1, 6, 4]} />
          <meshStandardMaterial color="#F5E9C8" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}
