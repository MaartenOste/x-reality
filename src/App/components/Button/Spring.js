import React, { useState } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { animated, useSpring } from "react-spring/three";
import { Box, Text } from "@react-three/drei";

export default (props) => {
  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [colorCurrent, setColorCurrent] = useState(0xff0000);
  const { opacity, rotation, scale } = useSpring({
    opacity: hover ? 1 : 0.5,
    scale: hover ? [1.5, 1.25] : [1, 1],
    rotation: toggle ? [THREE.MathUtils.degToRad(-90), 0, 0] : [0, 0, 0],
  });

  useFrame(() => {});

  return (
    <animated.group
      onClick={() => setToggle(!toggle)}
      onDoubleClick={() => setColorCurrent(colorCurrent >> 8)}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
      rotation={rotation}
    >
      <animated.mesh scale={scale}>
        <planeBufferGeometry args={[1, 0.5]} />
        <animated.meshMatcapMaterial
          opacity={opacity}
          color={colorCurrent}
          transparent={true}
        />
      </animated.mesh>
      <Text color="white" fontSize={0.2} position={[0, 0, 0.01]}>
        Click Me!
      </Text>
    </animated.group>
  );
};
