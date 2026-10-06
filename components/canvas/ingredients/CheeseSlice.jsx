'use client';

export default function CheeseSlice({ size = 0.95 }) {
  const corners = [0, 1, 2, 3].map((i) => (Math.PI / 2) * i + Math.PI / 4);

  return (
    <group rotation={[0, Math.PI / 4, 0]}>
      {/* صفحه‌ی اصلی پنیر (به‌شکل لوزی چرخونده شده) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[size, 0.025, size]} />
        <meshStandardMaterial color="#F2C744" roughness={0.4} metalness={0.05} />
      </mesh>
      {/* چهار گوشه‌ی آویزون - حس آب‌شدن و ریزش از لبه‌ی گوشت */}
      {corners.map((angle, i) => (
        <mesh
          key={i}
          position={[Math.cos(angle) * size * 0.46, -0.03, Math.sin(angle) * size * 0.46]}
          rotation={[0.5, angle, 0]}
        >
          <coneGeometry args={[0.1, 0.12, 3]} />
          <meshStandardMaterial color="#F2C744" roughness={0.4} metalness={0.05} />
        </mesh>
      ))}
    </group>
  );
}
