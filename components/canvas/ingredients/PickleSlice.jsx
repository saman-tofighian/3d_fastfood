'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

export default function PickleSlice({ radius = 0.46 }) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const segments = 20;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const wobble = 1 + Math.sin(angle * 7) * 0.06;
      const x = Math.cos(angle) * radius * wobble;
      const y = Math.sin(angle) * radius * wobble;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.045, bevelEnabled: false });
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, 0.0225, 0);
    return geo;
  }, [radius]);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color="#8FAF4A" roughness={0.6} />
    </mesh>
  );
}
