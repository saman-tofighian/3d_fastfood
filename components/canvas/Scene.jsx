'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useSnapshot } from 'valtio';

import state from '@/store';
import {
  BURGER_INGREDIENTS,
  BURGER_BASE,
  SANDWICH_INGREDIENTS,
  SANDWICH_BASE,
} from '@/config/foodTypes';
import { BURGER_VISUALS, SANDWICH_VISUALS, BunBottom, BunTop, BreadSliceBase } from './ingredients';
import StackBuilder from './StackBuilder';
import PizzaBuilder from './PizzaBuilder';
import Steam from './Steam';

const burgerMap = Object.fromEntries(BURGER_INGREDIENTS.map((i) => [i.key, i]));
const sandwichMap = Object.fromEntries(SANDWICH_INGREDIENTS.map((i) => [i.key, i]));

function FoodStation() {
  const snap = useSnapshot(state);
  const food = snap.selectedFood;
  const build = snap.builds[food];

  const isHot = food === 'pizza' ? build.baked : build.closed;

  return (
    <group position={[0, 0, 0]}>
      <mesh position={[0, -0.03, 0]} receiveShadow>
        <cylinderGeometry args={[1.5, 1.4, 0.06, 48]} />
        <meshStandardMaterial color="#FBF1E6" roughness={0.3} />
      </mesh>

      {food === 'burger' && (
        <StackBuilder
          food="burger"
          visuals={BURGER_VISUALS}
          ingredientMap={burgerMap}
          baseHeight={BURGER_BASE.bottomHeight}
          BaseVisual={BunBottom}
          baseVisualProps={{ color: '#D9A24B', radius: BURGER_BASE.bottomRadius }}
          LidVisual={BunTop}
          lidVisualProps={{ color: '#D9A24B', radius: BURGER_BASE.topRadius }}
          lidHeight={BURGER_BASE.topHeight}
        />
      )}
      {food === 'sandwich' && (
        <StackBuilder
          food="sandwich"
          visuals={SANDWICH_VISUALS}
          ingredientMap={sandwichMap}
          baseHeight={SANDWICH_BASE.height}
          BaseVisual={BreadSliceBase}
          baseVisualProps={{ width: SANDWICH_BASE.width, depth: SANDWICH_BASE.depth, height: SANDWICH_BASE.height }}
          LidVisual={BreadSliceBase}
          lidVisualProps={{ width: SANDWICH_BASE.width, depth: SANDWICH_BASE.depth, height: SANDWICH_BASE.height }}
          lidHeight={SANDWICH_BASE.height}
        />
      )}
      {food === 'pizza' && <PizzaBuilder />}

      <Steam active={isHot} position={[0, 1.4, 0]} />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 2.6, 3.6], fov: 38 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      className="w-full h-full"
    >
      <color attach="background" args={['#1C1410']} />
      <ambientLight intensity={0.6} color="#FFE9CF" />
      <spotLight position={[2, 5, 3]} angle={0.5} penumbra={0.7} intensity={2} color="#FFD9A8" castShadow />
      <pointLight position={[-3, 1.5, -2]} intensity={0.3} color="#D62828" />

      <Suspense fallback={null}>
        <FoodStation />
        <ContactShadows position={[0, -0.06, 0]} opacity={0.5} width={5} height={5} blur={2.2} far={2} />
        <Environment preset="apartment" environmentIntensity={0.3} />
      </Suspense>

      <OrbitControls enablePan={false} minDistance={2.5} maxDistance={7} maxPolarAngle={Math.PI / 2.05} />
    </Canvas>
  );
}
