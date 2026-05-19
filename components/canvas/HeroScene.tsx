"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Grid, Stars } from "@react-three/drei";
import * as THREE from "three";

function AICore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#3b82f6"
        emissiveIntensity={1.2}
        wireframe
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 1200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  const points = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#a855f7"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function MouseCamera() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const x = state.pointer.x * 0.6;
    const y = state.pointer.y * 0.3;
    target.current.x = THREE.MathUtils.lerp(target.current.x, x, 0.05);
    target.current.y = THREE.MathUtils.lerp(target.current.y, y, 0.05);
    camera.position.x = target.current.x;
    camera.position.y = 2 + target.current.y;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function HeroScene() {
  return (
    <>
      <color attach="background" args={["#050810"]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#22d3ee" />
      <pointLight position={[-5, -2, -5]} intensity={0.6} color="#a855f7" />
      <AICore />
      <ParticleField />
      <Grid
        args={[30, 30]}
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3}
        fadeDistance={25}
        position={[0, -2, 0]}
        infiniteGrid
        cellColor="#1e3a5f"
        sectionColor="#22d3ee"
      />
      <Stars radius={50} depth={40} count={2000} factor={3} fade speed={0.5} />
      <MouseCamera />
    </>
  );
}
