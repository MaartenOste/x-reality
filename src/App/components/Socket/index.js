import React, { useEffect, useRef } from "react";
import { Text } from "@react-three/drei";
import { Box, Flex } from "@react-three/flex";
import io from "socket.io-client";
import { ZeroFill } from "App/utils";

export default () => {
  const distanceRef = useRef();
  const speedRef = useRef();

  const port = 3001;
  const socket = io(`http://localhost:${port}`);

  socket.on("connect", () => {
    console.log("Socket connected: ", socket.connected);
  });

  socket.on("disconnect", () => {
    console.log("Socket connected: ", socket.connected);
  });

  useEffect(() => {
    socket.on("telemetry", (message) => {
      const distance = new ZeroFill(message.distance, 6, " km");
      const speed = new ZeroFill(message.speed, 3, " km/u");
      if (distanceRef.current) distanceRef.current.text = distance;
      if (speedRef.current) speedRef.current.text = speed;
    });
  });

  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      position={[-3, 0, 0]}
      size={[6, 0, 0]}
    >
      <Box>
        <Text
          color="hsl(210, 100%, 70%)"
          fontSize={1}
          ref={distanceRef}
          text="socket.IO"
        />
      </Box>
      <Box>
        <Text
          color="hsl(30, 100%, 70%)"
          fontSize={1}
          ref={speedRef}
          text="socket.IO"
        />
      </Box>
    </Flex>
  );
};