'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { easing } from 'maath';

import state from '@/store';
import { PIZZA_BASE } from '@/config/foodTypes';
import PizzaTopping from './PizzaTopping';

export default function PizzaBuilder() {
  const snap = useSnapshot(state);
  const build = snap.builds.pizza;
  const crustMatRef = useRef();
  const edgeMatRef = useRef();
  const cheeseRef = useRef();

  useFrame((_, delta) => {
    const crustTarget = build.baked ? '#C8862E' : PIZZA_BASE.color;
    const edgeTarget = build.baked ? '#B5793A' : '#E8C178';
    if (crustMatRef.current) easing.dampC(crustMatRef.current.color, crustTarget, 0.3, delta);
    if (edgeMatRef.current) easing.dampC(edgeMatRef.current.color, edgeTarget, 0.3, delta);
    if (cheeseRef.current && build.cheeseLayer) {
      const t = Math.min((Date.now() - build.cheeseLayer.addedAt) / 1000 / 0.6, 1);
      const eased = t * t * (3 - 2 * t);
      cheeseRef.current.scale.y = Math.max(eased, 0.001);
    }
  });

  return (
    <group>
      {/* خمیر پیتزا */}
      <mesh position={[0, PIZZA_BASE.height / 2, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[PIZZA_BASE.radius * 0.92, PIZZA_BASE.radius * 0.92, PIZZA_BASE.height, 48]} />
        <meshStandardMaterial ref={crustMatRef} color={PIZZA_BASE.color} roughness={0.8} />
      </mesh>

      {/* لبه‌ی برجسته‌ی خمیر - حلقه‌ی دور تا دور که پیتزا رو واقعی‌تر می‌کنه */}
      <mesh position={[0, PIZZA_BASE.height * 0.6, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <torusGeometry args={[PIZZA_BASE.radius * 0.92, PIZZA_BASE.height * 0.9, 12, 48]} />
        <meshStandardMaterial ref={edgeMatRef} color="#E8C178" roughness={0.75} />
      </mesh>

      {/* سس گوجه */}
      <mesh position={[0, PIZZA_BASE.height + 0.005, 0]} receiveShadow>
        <cylinderGeometry args={[PIZZA_BASE.radius * 0.82, PIZZA_BASE.radius * 0.82, 0.01, 48]} />
        <meshStandardMaterial color="#B5342A" roughness={0.5} />
      </mesh>

      {build.cheeseLayer && (
        <mesh ref={cheeseRef} position={[0, PIZZA_BASE.height + 0.03, 0]} scale={[1, 0.001, 1]}>
          <cylinderGeometry args={[PIZZA_BASE.radius * 0.8, PIZZA_BASE.radius * 0.8, 0.06, 48]} />
          <meshStandardMaterial color="#F2D34D" roughness={0.5} />
        </mesh>
      )}

      {build.toppings.map((t) => (
        <PizzaTopping
          key={t.id}
          shape={{
            pepperoni: 'disc',
            mushroom: 'cap',
            olive: 'ring',
            pepper: 'strip',
            corn: 'bit',
          }[t.key]}
          x={t.x}
          z={t.z}
          rot={t.rot}
          baseY={PIZZA_BASE.height + (build.cheeseLayer ? 0.09 : 0.04)}
          addedAt={t.addedAt}
        />
      ))}
    </group>
  );
}
