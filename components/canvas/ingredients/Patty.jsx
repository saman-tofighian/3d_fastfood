'use client';

export default function Patty({ radius = 0.6, height = 0.2 }) {
  return (
    <group>
      {/* بدنه‌ی اصلی - کمی کم‌ضلع تا لبه‌ش دست‌ساز و بی‌قاعده به‌نظر بیاد */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius * 0.94, height, 11]} />
        <meshStandardMaterial color="#4A2C1A" roughness={0.75} />
      </mesh>
      {/* لبه‌ی کمی روشن‌تر و آبدار دور گوشت */}
      <mesh position={[0, height * 0.02, 0]}>
        <cylinderGeometry args={[radius * 1.01, radius * 0.96, height * 0.9, 11]} />
        <meshStandardMaterial color="#5C3A21" roughness={0.8} transparent opacity={0.35} />
      </mesh>
      {/* خط‌های گریل - چندتا نوار تیره‌ی موازی روی سطح */}
      {[-0.3, -0.1, 0.1, 0.3].map((offset, i) => (
        <mesh key={i} position={[offset * radius, height / 2 + 0.002, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.06, 0.004, radius * 1.5]} />
          <meshStandardMaterial color="#201008" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}
