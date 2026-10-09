import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export interface MannequinConfig {
  pose?: string;
  outfit?: string;
  c1?: string;
  c2?: string;
  wide?: boolean;
  hair?: string;
  jewel?: boolean;
}

export default function Mannequin({ config }: { config?: MannequinConfig }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // A simple placeholder model for the mannequin
  const mainColor = config?.c1 || '#F1EAE0';
  const accentColor = config?.c2 || '#0E7293';

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Body/Torso */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.12, 0.6, 16]} />
        <meshStandardMaterial color={mainColor} roughness={0.8} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.65, 0]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={mainColor} roughness={0.5} />
      </mesh>

      {/* Outfit accent */}
      {config?.outfit === 'topPants' && (
        <mesh position={[0, 0.8, 0]} castShadow>
          <cylinderGeometry args={[0.13, 0.14, 0.4, 16]} />
          <meshStandardMaterial color={accentColor} roughness={0.9} />
        </mesh>
      )}
    </group>
  );
}
