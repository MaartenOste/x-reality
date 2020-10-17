import React from "react";
import { useResource } from "react-three-fiber";
import { useControl } from "react-three-gui";

export default () => {
  const frontLightRef = useResource();
  const leftLightRef = useResource();
  const rightLightRef = useResource();

  const helperSize = 0.5;
  const showLightHelpers = useControl("Show helpers", {
    group: "Light Helpers",
    type: "boolean",
    value: true,
  });
  const ambientLightColor = useControl("Color", {
    group: "Ambient Light",
    type: "color",
    value: "hsl(0, 0%, 100%)",
  });
  const ambientLightIntensity = useControl("Intensity", {
    group: "Ambient Light",
    type: "number",
    value: 0.1,
    min: 0,
    max: 1,
  });
  const frontLightColor = useControl("Color", {
    group: "Front Light",
    type: "color",
    value: "hsl(0, 0%, 70%)",
  });
  const frontLightIntensity = useControl("Intensity", {
    group: "Front Light",
    type: "number",
    value: 0.4,
    min: 0,
    max: 1,
  });
  const leftLightColor = useControl("Color", {
    group: "Left Light",
    type: "color",
    value: "hsl(210, 100%, 70%)",
  });
  const leftLightIntensity = useControl("Intensity", {
    group: "Left Light",
    type: "number",
    value: 1,
    min: 0,
    max: 1,
  });
  const rightLightColor = useControl("Color", {
    group: "Right Light",
    type: "color",
    value: "hsl(30, 100%, 70%)",
  });
  const rightLightIntensity = useControl("Intensity", {
    group: "Right Light",
    type: "number",
    value: 1,
    min: 0,
    max: 1,
  });

  return (
    <group>
      <ambientLight
        color={ambientLightColor}
        intensity={ambientLightIntensity}
      />
      <directionalLight
        color={frontLightColor}
        intensity={frontLightIntensity}
        position={[0, 2, 4]}
        ref={frontLightRef}
      />
      <directionalLight
        color={leftLightColor}
        intensity={leftLightIntensity}
        position={[-4, 0, 0]}
        ref={leftLightRef}
      />
      <directionalLight
        color={rightLightColor}
        intensity={rightLightIntensity}
        position={[4, 0, 0]}
        ref={rightLightRef}
      />
      {showLightHelpers && (
        <>
          {frontLightRef.current && (
            <directionalLightHelper
              args={[frontLightRef.current, helperSize]}
            />
          )}
          {leftLightRef.current && (
            <directionalLightHelper args={[leftLightRef.current, helperSize]} />
          )}
          {rightLightRef.current && (
            <directionalLightHelper
              args={[rightLightRef.current, helperSize]}
            />
          )}
        </>
      )}
    </group>
  );
};
