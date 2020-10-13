import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF, useSubdivision } from "@react-three/drei";

import suzanne from "./suzanne.glb";

export default () => {
  const [clockwise, setClockwise] = useState(false);
  const [rotate, setRotate] = useState(false);
  const { nodes, materials } = useGLTF(suzanne, true);
  const objectRef = useRef();
  const suzanneRef = useSubdivision(2);
  const speed = 0.025;

  useFrame(() => {
    objectRef.current.rotation.x +=
      speed * (rotate ? 1 : 0) * (clockwise ? 1 : -1);
    objectRef.current.rotation.y +=
      speed * (rotate ? 1 : 0) * (clockwise ? 1 : -1);
    objectRef.current.rotation.z +=
      speed * (rotate ? 1 : 0) * (clockwise ? 1 : -1);
  });

  return (
    <group
      ref={objectRef}
      onClick={() => setClockwise(!clockwise)}
      onDoubleClick={() => setRotate(!rotate)}
    >
      <mesh
        geometry={nodes.Suzanne.geometry}
        material={materials["Paars"]}
        ref={suzanneRef}
      />
    </group>
  );
};
