import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Macbook";
import { useState } from "react";

export default function My3D() {
  const [lights, setLights] = useState(true);

  return (
    <div>
      <Canvas
        style={{
          height: "100vh",
        }}
      >
        {lights && (
          <>
            <OrbitControls enableZoom={false} />
            <Environment preset="forest" blur={100} />
            <shadowMaterial transparent opacity={0.2} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-4, 5, 3]} intensity={1} />
          </>
        )}
        <Model />
      </Canvas>
    </div>
  );
}
