import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Stars from "../models/Stars";

/**
 * A fixed, full-screen animated starfield that lives behind every page.
 * It is purely decorative; pointer events are disabled so it never steals
 * interactions from the page content layered on top of it.
 */
const Background = () => {
  return (
    <div className="bg-canvas">
      {/* Soft colour glows that bleed through the stars for a nebula feel */}
      <div className="bg-glow bg-glow--blue" />
      <div className="bg-glow bg-glow--purple" />

      <Canvas
        className="!fixed inset-0"
        camera={{ position: [0, 0, 1], fov: 75, near: 0.01, far: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
