"use client";

import { Canvas } from "@react-three/fiber";
import { SkillsOrbitScene } from "./SkillsOrbitScene";

export function SkillsOrbitCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 8.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full"
    >
      <SkillsOrbitScene />
    </Canvas>
  );
}
