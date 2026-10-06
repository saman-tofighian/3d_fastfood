'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

export default function BunBottom({ color = '#D9A24B', radius = 0.68 }) {
  const geometry = useMemo(() => {
    const s = radius / 0.68;
    const pts = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.6 * s, 0),
      new THREE.Vector2(0.63 * s, 0.05 * s),
      new THREE.Vector2(0.58 * s, 0.13 * s),
      new THREE.Vector2(0.3 * s, 0.19 * s),
      new THREE.Vector2(0, 0.2 * s),
    ];
    return new THREE.LatheGeometry(pts, 28);
  }, [radius]);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color={color} roughness={0.85} />
    </mesh>
  );
}
