"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "@/lib/data";

function SkillNode({
  position,
  name,
  color,
}: {
  position: [number, number, number];
  name: string;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.5;
    const scale = hovered ? 1.35 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(scale, scale, scale),
      0.12
    );
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.14, 20, 20]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.4 : 0.5}
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
      <Html
        center
        distanceFactor={10}
        style={{
          pointerEvents: "none",
          transition: "all 0.2s ease",
          opacity: hovered ? 1 : 0.85,
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        <span
          className="inline-block whitespace-nowrap rounded-md border border-white/10 bg-slate-900/90 px-2 py-0.5 font-mono text-[9px] leading-none text-cyan-100 shadow-lg backdrop-blur-sm md:text-[10px]"
          style={{
            boxShadow: hovered ? `0 0 16px ${color}66` : undefined,
          }}
        >
          {name}
        </span>
      </Html>
    </group>
  );
}

function OrbitRing({ radius, count, ringIndex }: { radius: number; count: number; ringIndex: number }) {
  const items = skills.slice(ringIndex * 8, ringIndex * 8 + count);
  const offset = ringIndex * 0.4;

  return (
    <>
      {items.map((skill, i) => {
        const angle = (i / items.length) * Math.PI * 2 + offset;
        const y = Math.sin(angle * 2) * 0.35;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <SkillNode
            key={skill.name}
            position={[x, y, z]}
            name={skill.name}
            color={skill.color}
          />
        );
      })}
    </>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.25;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.55, 1]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#3b82f6"
        emissiveIntensity={0.9}
        wireframe
      />
    </mesh>
  );
}

export function SkillsOrbitScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.12;
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-4, -2, -3]} intensity={0.7} color="#a855f7" />
      <group ref={groupRef}>
        <Core />
        <OrbitRing radius={2.2} count={8} ringIndex={0} />
        <OrbitRing radius={3.2} count={8} ringIndex={1} />
        <OrbitRing radius={4.2} count={8} ringIndex={2} />
      </group>
    </>
  );
}
