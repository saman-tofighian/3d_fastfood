'use client';

export default function CucumberSlice({ radius = 0.4 }) {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius, 0.05, 20]} />
        <meshStandardMaterial color="#3F7A3A" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.026, 0]}>
        <cylinderGeometry args={[radius * 0.78, radius * 0.78, 0.004, 20]} />
        <meshStandardMaterial color="#E9F2DC" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.029, 0]}>
        <cylinderGeometry args={[radius * 0.3, radius * 0.3, 0.003, 14]} />
        <meshStandardMaterial color="#D6E8C4" roughness={0.5} />
      </mesh>
    </group>
  );
}
