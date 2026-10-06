'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function easeOutBack(x) {
  const c1 = 1.6;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

function Pepperoni() {
  return (
    <group>
      <mesh castShadow>
        <cylinderGeometry args={[0.15, 0.14, 0.025, 16]} />
        <meshStandardMaterial color="#8E241E" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.014, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.01, 16]} />
        <meshStandardMaterial color="#C8453A" roughness={0.45} />
      </mesh>
    </group>
  );
}

function Mushroom() {
  return (
    <group>
      <mesh position={[0, 0.03, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.045, 0.07, 8]} />
        <meshStandardMaterial color="#EDE3D0" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.06, 0]} castShadow>
        <coneGeometry args={[0.1, 0.06, 10]} />
        <meshStandardMaterial color="#C9B795" roughness={0.6} />
      </mesh>
    </group>
  );
}

function Olive() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
      <torusGeometry args={[0.045, 0.028, 8, 14]} />
      <meshStandardMaterial color="#1E1B16" roughness={0.3} />
    </mesh>
  );
}

function PepperStrip() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
      <torusGeometry args={[0.11, 0.025, 6, 10, Math.PI * 0.8]} />
      <meshStandardMaterial color="#4F9D4A" roughness={0.5} />
    </mesh>
  );
}

function Corn() {
  return (
    <mesh castShadow>
      <sphereGeometry args={[0.035, 6, 5]} />
      <meshStandardMaterial color="#F2C744" roughness={0.4} />
    </mesh>
  );
}

const SHAPE_COMPONENTS = {
  disc: Pepperoni,
  cap: Mushroom,
  ring: Olive,
  strip: PepperStrip,
  bit: Corn,
};

export default function PizzaTopping({ shape, x, z, rot, baseY, addedAt }) {
  const ref = useRef();
  const Shape = SHAPE_COMPONENTS[shape] || Corn;

  useFrame(() => {
    if (!ref.current) return;
    const t = Math.max(0, Math.min((Date.now() - addedAt) / 1000 / 0.45, 1));
    const eased = easeOutBack(t);
    ref.current.scale.setScalar(Math.max(eased, 0.001));
  });

  return (
    <group ref={ref} position={[x, baseY, z]} rotation={[0, rot, 0]} scale={0.001}>
      <Shape />
    </group>
  );
}
