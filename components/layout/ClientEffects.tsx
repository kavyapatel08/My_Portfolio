"use client";

import { CustomCursor } from "./CustomCursor";
import { LoadingScreen } from "./LoadingScreen";
import { MouseGlow } from "./MouseGlow";

export function ClientEffects() {
  return (
    <>
      <LoadingScreen />
      <MouseGlow />
      <CustomCursor />
    </>
  );
}
