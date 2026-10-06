'use client';

import { RoundedBox } from '@react-three/drei';

export default function BreadSlice({ width = 1.3, depth = 0.9, height = 0.14, crustColor = '#B5793A', crumbColor = '#F2DFB0' }) {
  return (
    <group>
      {/* پوسته‌ی تیره‌ی نون (کمی بزرگ‌تر، پشت مغز روشن دیده می‌شه به‌عنوان حاشیه) */}
      <RoundedBox args={[width, height, depth]} radius={0.05} smoothness={3} castShadow receiveShadow>
        <meshStandardMaterial color={crustColor} roughness={0.8} />
      </RoundedBox>
      {/* مغز روشن نون، کمی تو رفته از لبه‌ها */}
      <RoundedBox
        args={[width * 0.86, height * 0.7, depth * 0.84]}
        radius={0.04}
        smoothness={2}
        position={[0, height * 0.12, 0]}
      >
        <meshStandardMaterial color={crumbColor} roughness={0.9} />
      </RoundedBox>
    </group>
  );
}
