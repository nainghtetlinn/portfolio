"use client";

import { Bounds, Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Lego = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />

      <Bounds fit clip observe margin={1}>
        <Center>
          <group>
            <Model />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
              <circleGeometry args={[10, 32]} />
              <meshBasicMaterial color="black" transparent opacity={0.25} />
            </mesh>
          </group>
        </Center>
      </Bounds>

      <OrbitControls
        makeDefault
        enableDamping
        autoRotate
        autoRotateSpeed={5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
      />
    </Canvas>
  );
};

const Model = () => {
  const { scene } = useGLTF("/lego_batman_3d_model/scene.gltf");

  return <primitive object={scene} />;
};
