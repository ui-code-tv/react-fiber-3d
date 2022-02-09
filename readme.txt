

1] explain you installed reactjs
2] Install react fiber
3] Clean up
4] Basic setup
5] npm install three react-three-fiber
5] start off with
import { Canvas } from "react-three-fiber";

import "./styles.css";

function App() {
  return <Canvas />;
}




Explain



sites :
https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/
https://blog.logrocket.com/react-three-fiber-3d-rendering-in-the-browser/
https://threejs.org/docs/#api/en/materials/MeshStandardMaterial


threejs- mirror reflection matreial -https://codeworkshop.dev/blog/2020-06-14-creating-a-skybox-with-reflections-in-react-three-fiber/

1] 
   import React, { useRef, useState } from "react";
   import { Canvas, useFrame } from "@react-three/fiber";

1-1.2 npm install three react-three-fiber
   

 1-2 Add  
     <Canvas>
      
      <Box  />
    </Canvas>


function Box(props) {
  // This reference give us direct access to the mesh
  const mesh = useRef();


  return (
    
    <mesh
      {...props}
      ref={mesh}
      
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>

  );
}


  1-3  add postion curly brakets array
       <Box  position={[-1.2, 0, 0]}/>



