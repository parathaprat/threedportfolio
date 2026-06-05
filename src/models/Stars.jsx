import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Generates `count` points randomly distributed inside a spherical shell of
 * the given radius. Using cube-root sampling keeps the density even instead of
 * clustering everything near the center.
 */
const makeShell = (count, radius, inner = 0.35) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * (inner + (1 - inner) * Math.cbrt(Math.random()));
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

/** A soft, round, glowing dot texture so the points read as stars not squares. */
const makeStarTexture = () => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const g = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.2, "rgba(255,255,255,0.95)");
  g.addColorStop(0.45, "rgba(255,255,255,0.35)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
};

const StarLayer = ({ positions, color, size, opacity, texture }) => {
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Stars = () => {
  const parallax = useRef();
  const spin = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  const texture = useMemo(() => makeStarTexture(), []);
  const white = useMemo(() => makeShell(4200, 17), []);
  const blue = useMemo(() => makeShell(1800, 13), []);
  const purple = useMemo(() => makeShell(1300, 10), []);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", (e) => {
      if (e.touches?.[0]) {
        mouse.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
      }
    });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    // Cap delta so a tab regaining focus doesn't cause a huge jump.
    const d = Math.min(delta, 0.1);
    if (spin.current) {
      spin.current.rotation.y += d * 0.018;
      spin.current.rotation.x += d * 0.006;
    }
    if (parallax.current) {
      parallax.current.rotation.y +=
        (mouse.current.x * 0.18 - parallax.current.rotation.y) * 0.04;
      parallax.current.rotation.x +=
        (mouse.current.y * 0.18 - parallax.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={parallax}>
      <group ref={spin}>
        <StarLayer
          positions={white}
          color="#ffffff"
          size={0.07}
          opacity={0.9}
          texture={texture}
        />
        <StarLayer
          positions={blue}
          color="#6ea8ff"
          size={0.13}
          opacity={0.8}
          texture={texture}
        />
        <StarLayer
          positions={purple}
          color="#a378ff"
          size={0.16}
          opacity={0.7}
          texture={texture}
        />
      </group>
    </group>
  );
};

export default Stars;
