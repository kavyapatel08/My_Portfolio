"use client";

import { Canvas } from "@react-three/fiber";
import { HeroScene } from "./HeroScene";

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0 h-full w-full"
    >
      <HeroScene />
    </Canvas>
  );
}
