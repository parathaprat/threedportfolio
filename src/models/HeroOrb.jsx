import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sparkles } from "@react-three/drei";

/**
 * A slowly morphing, iridescent orb that drifts and reacts to the cursor.
 * Position / scale / sparkle settings are passed in so the same component can
 * serve as a large right-side hero on desktop and a small contained accent on
 * mobile.
 */
const HeroOrb = ({
  position = [2.0, 0.1, 0],
  scale = 1.55,
  sparkleScale = 13,
  sparkleCount = 80,
}) => {
  const inner = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const baseX = position[0];

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (!inner.current) return;
    const d = Math.min(delta, 0.1);
    inner.current.rotation.y += d * 0.14;
    inner.current.rotation.x +=
      (mouse.current.y * 0.22 - inner.current.rotation.x) * 0.05;
    const targetX = baseX + mouse.current.x * 0.18;
    inner.current.position.x += (targetX - inner.current.position.x) * 0.05;
  });

  return (
    <group>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 3, 5]} intensity={2.4} color="#22d3ee" />
      <directionalLight position={[-5, -2, 3]} intensity={2.1} color="#e879f9" />
      <directionalLight position={[0, 5, -4]} intensity={1.7} color="#6366f1" />

      <Float speed={1.3} rotationIntensity={0.45} floatIntensity={0.9}>
        <group ref={inner} position={position} scale={scale}>
          <mesh>
            <icosahedronGeometry args={[1.4, 32]} />
            <MeshDistortMaterial
              color="#7c3aed"
              emissive="#4c1d95"
              emissiveIntensity={0.45}
              roughness={0.32}
              metalness={0.18}
              distort={0.38}
              speed={1.8}
            />
          </mesh>

          <mesh scale={1.22}>
            <icosahedronGeometry args={[1.4, 3]} />
            <meshBasicMaterial
              color="#67e8f9"
              wireframe
              transparent
              opacity={0.12}
            />
          </mesh>
        </group>
      </Float>

      <Sparkles
        count={sparkleCount}
        scale={sparkleScale}
        size={2}
        speed={0.3}
        opacity={0.7}
        color="#a5b4fc"
        position={[position[0], position[1], 0]}
      />
    </group>
  );
};

export default HeroOrb;
