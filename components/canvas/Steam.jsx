'use client';

import { Sparkles } from '@react-three/drei';

export default function Steam({ active, position = [0, 1, 0] }) {
  if (!active) return null;
  return (
    <Sparkles position={position} count={24} scale={[0.5, 0.7, 0.5]} size={4} speed={0.5} opacity={0.4} color="#FFFFFF" noise={0.4} />
  );
}
