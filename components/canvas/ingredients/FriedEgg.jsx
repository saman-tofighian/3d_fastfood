'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

export default function FriedEgg({ radius = 0.5 }) {
  const whiteGeo = useMemo(() => {
    const shape = new THREE.Shape();
    const segments = 16;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const wobble = 1 + Math.sin(angle * 3.5) * 0.12 + Math.cos(angle * 2) * 0.08;
      const x = Math.cos(angle) * radius * wobble;
      const y = Math.sin(angle) * radius * wobble * 0.85;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.035, bevelEnabled: false });
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, 0.017, 0);
    return geo;
  }, [radius]);

  return (
    <group>
      <mesh geometry={whiteGeo} castShadow receiveShadow>
        <meshStandardMaterial color="#FBF6EE" roughness={0.4} />
      </mesh>
      <mesh position={[radius * 0.15, 0.045, -radius * 0.1]}>
        <sphereGeometry args={[radius * 0.32, 20, 16]} />
        <meshStandardMaterial color="#F2A619" roughness={0.3} />
      </mesh>
    </group>
  );
}
