import {useState,useRef} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import { useSpring, animated } from '@react-spring/three'


function Cube(props) {

  const mesh=useRef()
  useFrame ( ()=> (mesh.current.rotation.x += 0.01))
  const [hovered,setHover] = useState(false)
  const [active,setActive] = useState(false)
  const { scale } = useSpring({ scale: active ? 1.5 : 1 })

  return (
          <animated.mesh ref={mesh}
            onPointerOver={ (event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}
            onClick = {(event)=> setActive(!active)}
            scale = { scale}
            {...props}
          >
             <boxGeometry args={[2,2,2]}/>
             <meshStandardMaterial color={hovered ? "hotpink" : "orange"}/> 

          </animated.mesh>

  )

}

function App() {
  return (
   <Canvas>
     <ambientLight />
     <pointLight position={[10,10,10]} />
     <Cube position={[-2.2,0,0]}/>
     <Cube position={[2.2,0,0]}/>

   </Canvas>
  );
}

export default App;
