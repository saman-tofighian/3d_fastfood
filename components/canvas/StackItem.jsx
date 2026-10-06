'use client';

import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const DURATION = 0.5;
const DROP_FROM = 2.2;

function easeOutBack(x) {
  const c1 = 1.5;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

// Visual: خودِ کامپوننت بصری ماده (مثلاً Patty، Lettuce و ...) - نه یه رشته
export default function StackItem({ Visual, visualProps, targetY, addedAt }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    const t = Math.min((Date.now() - addedAt) / 1000 / DURATION, 1);
    const eased = easeOutBack(t);
    ref.current.position.y = THREE.MathUtils.lerp(targetY + DROP_FROM, targetY, eased);
  });

  if (!Visual) return null;

  return (
    <group ref={ref} position={[0, targetY + DROP_FROM, 0]}>
      <Visual {...visualProps} />
    </group>
  );
}
